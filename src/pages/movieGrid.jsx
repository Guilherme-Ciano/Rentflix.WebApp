import React from "react";
import "../styles/movieGrid.scss";
import { Button } from "@chakra-ui/react";
import MovieCard from "../components/movieCard";

export default function MovieGrid(props) {
  const { movies } = props;

  return (
    <div className="gridContainerMovies">
      <MovieCard
        movieTitle="Coringa"
        movieGenre="Drama"
        movieDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
      sint porro ullam dolor sit. Illum rem natus beatae vel quis,
      necessitatibus commodi adipisci maiores ipsum eaque sequi quos quae
      non?"
        moviePoster="https://www.joblo.com/wp-content/uploads/2019/08/joker-poster-main2-1.jpg"
        rentLink="/"
      />
      <MovieCard
        movieTitle="Homem Formiga"
        movieGenre="Ação"
        movieDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        sint porro ullam dolor sit. Illum rem natus beatae vel quis,
        necessitatibus commodi adipisci maiores ipsum eaque sequi quos quae
        non?"
        moviePoster="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"
        rentLink="/"
        isLancamento={true}
      />
      <div className="movieCard">a</div>
      <div className="movieCard">a</div>
      <div className="movieCard">a</div>
      <div className="movieCard">a</div>
      <div className="movieCard">a</div>
      <div className="movieCard">a</div>
      <div className="movieCard">a</div>
    </div>
  );
}
