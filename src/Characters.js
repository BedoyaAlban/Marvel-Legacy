import React from "react";

function Characters({ name, description, image }) {
  return (
    <div className="character">
      <img src={`${image}/standard_large.jpg`} alt="" />
      <div className="character__name">{name}</div>
      <div className="character__description">
        {description ? description : "No description available"}
      </div>
    </div>
  );
}

export default Characters;
