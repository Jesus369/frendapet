import React, { Component } from "react";

import PetsListings from "./PetsListings";
import AddPetModal from "../Modal/AddPetModal";

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddModal: false
    };
  }

  toggleAddPetModal = () => {
    this.setState(state => ({
      openAddPetModal: !state.openAddPetModal
    }));
  };

  render() {
    const { userId, pets = [] } = this.props;
    const { openAddPetModal } = this.state;
    return (
      <div className="center_content">
        <PetsListings
          pets={pets}
          userId={userId}
          openModalClick={this.toggleAddPetModal}
        />
        <AddPetModal open={openAddPetModal} close={this.toggleAddPetModal} />
      </div>
    );
  }
}

export default Center;
