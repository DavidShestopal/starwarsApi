import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import "./styles/starwarscharacters.css";

export default function CharacterCard({ character, onCharacterDelete }) {
  console.log(character.homeworld);
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        m: 2,
        p: 1,
        backgroundColor: "black"
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "#ffc401" }}
          gutterBottom
        >
          {character.name}
        </Typography>
        <Typography
          sx={{ fontSize: 12, color: "white", textTransform: "uppercase" }}
          gutterBottom
        >
          <span className="spanTag"> Year Born : </span>
          {character.birth_year}
        </Typography>
        <Typography
          sx={{ fontSize: 12, color: "white", textTransform: "uppercase" }}
          gutterBottom
        >
          <span className="spanTag"> Gender: </span>
          {character.gender}
        </Typography>
        <Typography
          sx={{ fontSize: 12, color: "white", textTransform: "uppercase" }}
          gutterBottom
        >
          <span className="spanTag"> Hair Color: </span>
          {character.hair_color}
        </Typography>
        <Typography
          sx={{ fontSize: 12, color: "white", textTransform: "uppercase" }}
          gutterBottom
        >
          <span className="spanTag"> Height:</span> {character.height}
        </Typography>
        <Typography
          sx={{ fontSize: 12, color: "white", textTransform: "uppercase" }}
          gutterBottom
        >
          <span className="spanTag"> Mass:</span> {character.mass}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CardActions>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={async () => {
              await onCharacterDelete();
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
