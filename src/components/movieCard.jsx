import React from "react";
import "../styles/movieGrid.scss";
import { Button } from "@chakra-ui/react";

export default function MovieCard(props) {
  const {
    movieTitle,
    movieGenre,
    movieDescription,
    moviePoster,
    rentLink,
    isLancamento,
  } = props;

  return (
    <div className="movieCard">
      <img src={moviePoster} className="moviePoster" />
      <div className="movieInfo">
        {isLancamento && <div className="movieBadget"></div>}
        <div className="movieHeader">
          <div className="movieTitle">{movieTitle}</div>
          <div className="movieGenre">{movieGenre}</div>
        </div>
        <div className="movieDescription">{movieDescription}</div>

        <Button
          fontFamily={"heading"}
          mt={8}
          w={"full"}
          bgGradient="linear(to-r, blue.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, blue.400,pink.400)",
            boxShadow: "xl",
          }}
          onClick={() => (window.location.href = rentLink)}
        >
          Alugar
        </Button>
      </div>
    </div>
  );
}
