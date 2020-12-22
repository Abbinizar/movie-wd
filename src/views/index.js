import React from "react"
import ContextMovie from "../context"
import MovieList from "./movieList"
import Search from "./search"

const Movie = () => {
    return (
        <div>
            <Search></Search>
            <MovieList></MovieList>
        </div>
    )
}

export default Movie