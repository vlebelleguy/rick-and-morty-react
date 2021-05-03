import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              {item.status} - {item.species} - {item.gender}
            </li>
            <li>
              <h3>Origin:</h3>
              <div className="item-text">{item.origin.name}</div>
            </li>
            <li>
              <h3>Location:</h3>
              {item.location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
