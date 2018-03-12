import React from "react";
import { Link } from "react-router-dom";

const PetsListings = ({ userId, pets = [], openModalClick }) => {
  return (
    <div className="pet_card_container">
      <div className="blank_pet_card">
        <img
          alt="This is a blank default setting for no user img"
          className="user_page_petimg"
          src={require("../../../pageImages/dogtag.png")}
        />
        <div className="hidden_text_layer">
          <p onClick={openModalClick} className="hidden_text">
            Add a pet
          </p>
        </div>
      </div>
      {pets.map(pet =>
        <div className="pet_card" key={`pet-${pet.id}`}>
          <Link className="link_to_pet" to={`/user/${userId}/${pet.id}`}>
            <li>
              <img
                alt={`A round of applause to ${pet.name}`}
                src={pet.image}
                className="user_page_petimg"
              />
            </li>
            <li>
              {pet.name}
            </li>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PetsListings;
