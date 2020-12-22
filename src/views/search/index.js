import React, { useContext, useState } from "react"
import { MovieContext } from "../../context";
import { BASE_URL } from "../../helpers/endpoint";
import executeAxios from "../../helpers/executeAxios";
import { searchBar } from "./style";
const Search = () => {
    const [dataSearch, setDataSearch] = useState({});
    const {movieList, setMovieList} = useContext(MovieContext)
    const getData = async () => {
        try {
            const response = await executeAxios({
                url: `${BASE_URL}s=${dataSearch.name}&page=${dataSearch.page}`
            })
            setMovieList(response.data.Search)
            console.log(dataSearch)
            // console.log(movieList)
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
        <div>
            <input className={searchBar} type="text" placeholder="Name" value={dataSearch.name} onChange={(e) => setDataSearch({...dataSearch, name : e.target.value})}></input>
            <input className={searchBar} type="number" placeholder="Pages" value={dataSearch.page} onChange={(e) => setDataSearch({...dataSearch, page : e.target.value})}></input>
            <button onClick={getData}>search</button>
        </div>
    )
}

export default Search