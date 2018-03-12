import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Form, Button, Modal, Input, Icon } from "semantic-ui-react";

import Dropzone from "react-dropzone";
import moment from "moment";
import axios from "axios";

class AddPetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      about: "",
      food: "",
      file: null
    };
  }

  onDrop = async files => {
    this.setState({ file: files[0] });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.name);
  };

  uploadToS3 = async (file, signedRequest) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };
    await axios.put(signedRequest, file, options);
  };

  formatFilename = filename => {
    const date = moment().format("YYYYMMDD");
    const randomString = Math.random().toString(36).substring(2, 7);
    const cleanedFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newFilename = `images/${date}-${randomString}-${cleanedFileName}`;
    return newFilename.substring(0, 60);
  };

  addPet = async () => {
    const { name, about, food, file } = this.state;

    const res = await this.props.s3Sign({
      variables: {
        filename: this.formatFilename(file.name),
        filetype: file.type
      }
    });

    const { signedRequest, url } = res.data.signS3;
    await this.uploadToS3(file, signedRequest);
    console.log(res.data.signS3);

    const response = await this.props.mutate({
      variables: { name, about, food, image: url }
    });

    console.log(response.data.addPet);
  };

  render() {
    const { name, about, food } = this.state;
    const { open, close } = this.props;

    return (
      <Modal open={open} close={close} className="pet_modal">
        <Form onChange={this.onChange} onSubmit={e => e.preventDefault()}>
          <Form.Field>
            <Dropzone className="dropzone" onDrop={this.onDrop}>
              <p>Add an Image</p>
              <Icon size="big" name="add square" />
            </Dropzone>
          </Form.Field>
          <Form.Field>
            <Input name="name" value={name} placeholder="Pet Name" />
          </Form.Field>
          <Form.Field>
            <Input name="about" value={about} placeholder="About Your Bud!" />
          </Form.Field>
          <Form.Field>
            <Input name="food" value={food} placeholder="Favorite Foods?" />
          </Form.Field>
          <Form.Group>
            <Button fluid onClick={this.addPet}>
              Add
            </Button>
            <Button fluid onClick={close}>
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    );
  }
}

const addPetMutation = gql`
  mutation($name: String!, $about: String, $food: String, $image: String) {
    addPet(name: $name, about: $about, food: $food, image: $image) {
      ok
    }
  }
`;

const s3SignMutation = gql`
  mutation($filename: String!, $filetype: String!) {
    signS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;

export default compose(
  graphql(addPetMutation),
  graphql(s3SignMutation, { name: "s3Sign" })
)(AddPetModal);
