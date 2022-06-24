import React from "react";
import "../styles/movieGrid.scss";
import { Button } from "@chakra-ui/react";
import MovieCard from "../components/movieCard";
import placeholders from "../utils/placeholder.json";
import { useSelector } from "react-redux";

export default function MovieGrid(props) {
  const { isHighRented, isBrandNew } = props;
  const allMovies = useSelector((state) => state.movieState.data.items);

  const brandNewMovies = allMovies.map(
    (movie) => movie.lancamento === new Date().getFullYear()
  );
  const highRentedMovies = allMovies.map((movie) => movie.rented > 2);

  const brandNewMovieCards = brandNewMovies.map((movie) => {
    return <MovieCard movie={movie} />;
  });

  const highRentedMovieCards = highRentedMovies.map((movie) => {
    return <MovieCard movie={movie} />;
  });

  const renderMovieCards = () => {
    if (isBrandNew) {
      return brandNewMovieCards;
    } else if (isHighRented) {
      return highRentedMovieCards;
    } else {
      return allMovies.map((movie) => {
        return <MovieCard movie={movie} />;
      });
    }
  };

  return (
    <div className="movieWrapper">
      <div className="movieTitle">
        <h1>Destaques</h1>
        <h3>Os melhores filmes do momento</h3>
      </div>
      <div className="gridContainerMovies">{renderMovieCards()}</div>
    </div>
  );
}
