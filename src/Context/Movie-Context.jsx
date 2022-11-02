import { createContext, useState, useEffect } from "react";
import { getData } from "../services/movies-service.service";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((result) => setMovies(result.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies, isLoading }}>
      {children}
    </MoviesContext.Provider>
  );
};
