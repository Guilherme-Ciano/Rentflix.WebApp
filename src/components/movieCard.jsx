import React from "react";
import "../styles/movieGrid.scss";
import { Button, Tooltip } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateCartItems } from "../store/slices/cartState";
import { useSelector } from "react-redux";

export default function MovieCard(props) {
  const dispatch = useDispatch();
  const { movie } = props;
  const allMovies = useSelector((state) => state.cartState.data);

  const sendMovieToCart = () => {
    dispatch(updateCartItems([...allMovies.items, movie]));
  };

  return (
    <div className="movieCard">
      <img src={movie.poster} className="moviePoster" />
      <div className="movieInfo">
        {movie.lancamento === 1 ? <div className="movieBadget"></div> : ""}
        <div className="movieHeader">
          <div className="movieTitle">{movie.titulo}</div>
          <div className="movieGenre">{movie.genero}</div>
        </div>
        <Tooltip label={movie.sinopse} placement="right" borderRadius={"8px"}>
          <div className="movieDescription">
            {movie.sinopse.substring(0, 200) + "..."}
          </div>
        </Tooltip>

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
          onClick={sendMovieToCart}
        >
          Alugar
        </Button>
      </div>
    </div>
  );
}
