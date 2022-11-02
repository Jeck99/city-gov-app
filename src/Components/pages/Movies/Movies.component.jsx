import "./Movies.css";
import { MoviesProvider } from "../../../Context/Movie-Context";
// import MoviesCards from "../../parts/Movies-Cards/Movies-Cards";
import MoviesTable from "../../parts/Movies-Table/Movies-Table";

function Movies() {
  return (
    <MoviesProvider>
      <div className="main movies">
        <h1>Movies Page</h1>
        {/* <MoviesCards/> */}
        <MoviesTable/>
      </div>
    </MoviesProvider>
  );
}

export default Movies;
