import React from "react";
import Typography from "@mui/material/Typography";
import "./mainFunctional.css";

import StarwarsCharacters from "./StarWarsCharacters/starwarsCharacters";

function MainFunctional() {
  return (
    <div className="App">
      <div className="image">
        {" "}
        <img
          src="http://assets.stickpng.com/images/602175e40ad3230004b93c20.png"
          className="logo"
          alt="logo"
        />
      </div>

      <StarwarsCharacters />
    </div>
  );
}

export default MainFunctional;
