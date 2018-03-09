import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      about: "",
      food: "",
      image: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addPet = async () => {
    const { name, about, food, image } = this.state;
    const response = await this.props.mutate({
      variables: { name, about, food, image }
    });
    const { ok } = response.data.addPet;
    if (ok) {
      this.props.history.push("/");
    }
    console.log(response);
  };

  render() {
    const { name, about, food, image } = this.state;

    return (
      <div>
        <form onChange={this.onChange} onSubmit={e => e.preventDefault()}>
          <input name="name" value={name} placeholder="Pet Name" />
          <input name="about" value={about} placeholder="About Your Bud!" />
          <input name="food" value={food} placeholder="Favorite Foods?" />
          <input
            name="image"
            value={image}
            placeholder="Add an image of your pet!"
          />
          <button onClick={this.addPet}>Add</button>
        </form>
      </div>
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

export default graphql(addPetMutation)(AddPet);
