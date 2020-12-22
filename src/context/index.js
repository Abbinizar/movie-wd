import React, { useState } from "react";

export const MovieContext = React.createContext();

const ContextMovie = ({ children }) => {
  const [movieList, setMovieList] = useState([]);

  const ContextState = {
    movieList,
    setMovieList,
  };

  return (
    <MovieContext.Provider value={ContextState}>
      {children}
    </MovieContext.Provider>
  );
};

export default ContextMovie;
