import React from "react";

function Characters({ name, description, image }) {
  return (
    <div className="character">
      <figure className="img-wrapper">
        <img className="img" src={`${image}/standard_large.jpg`} alt="" />
      </figure>

      <div className="character__name">
        <div>{name}</div>
        <span className="background"></span>
      </div>
      {/* <div className="character__description">
        {description ? description : "No description available"}
      </div>*/}
    </div>
  );
}

export default Characters;
