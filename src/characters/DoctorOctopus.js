import md5 from "md5";
import React, { useEffect, useState } from "react";
import Characters from "../Characters";

const DoctorOctopus = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const key = process.env.REACT_APP_APIKEY;
    const hash = md5(key);
    fetch(
      `http://gateway.marvel.com/v1/public/characters/${1009276}?ts=1&apikey=2b9d2a2a685daad55ad8e4db647d9344&hash=${hash}`
    )
      .then(response => response.json())
      .then(response => setCharacters(response.data.results));
  }, []);
  return (
    <div className="marvel__doctor-octopus">
      {characters.map(character => (
        <Characters
          name={character.name}
          description={character.description}
          image={character.thumbnail.path}
          key={character.id}
        />
      ))}
    </div>
  );
};

export default DoctorOctopus;
