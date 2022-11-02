import "./Movies-Cards.css";
import React, { useContext } from "react";
import { MoviesContext } from "../../../Context/Movies-Context";
import MoviesCard from "../Movies-Card/Movies-Card";
import Loading from "../Loading/Loading";

function MoviesCards() {
  const { Movies, isLoading } = useContext(MoviesContext);
  return (
    <div className="movies-cards">
      {
        isLoading ? 
        <Loading/>:
        Movies.map((Movie) => <MoviesCard MoviesItem={Movie} />)
      }
    </div>
  );
}

export default MoviesCards;
