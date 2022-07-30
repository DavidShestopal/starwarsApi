import React, { useState, useEffect } from "react";
import starwars from "../../APIs/starwars";

import TextField from "@mui/material/TextField";
import CharacterCard from "./characterCard";
import CharacterTable from "./characterTable";
import "./styles/starwarscharacters.css";

function StarwarsCharacters() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletedItem, setDeletedItem] = useState([]);

  async function handleCharacterDelete(characterName) {
    setDeletedItem([...deletedItem, characterName]);
  }

  useEffect(() => {
    starwars.getPeople().then((response) => {
      console.log("response", response);
      setData(response);
    });
  }, []);
  console.log(deletedItem, "i was deleted");

  const filterCharacters = [...data].filter((character) => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="Main-Content">
      <div className="Characters">
        <div>
          <div className="userInput">
            <TextField
              fullWidth
              sx={{ m: 4, mr: 8, ml: 8 }}
              id="outlined-basic"
              label="Search Characters"
              variant="outlined"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="content">
            {filterCharacters
              .filter((character) => !deletedItem.includes(character.name))
              .map((filteredCharacter) => {
                return (
                  <CharacterCard
                    character={filteredCharacter}
                    key={filteredCharacter.name}
                    onCharacterDelete={() =>
                      handleCharacterDelete(filteredCharacter.name)
                    }
                  />
                );
              })}

            <CharacterTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarwarsCharacters;
