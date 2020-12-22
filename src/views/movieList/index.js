/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from "react"
import Modal from "../../component/modal"
import { MovieContext } from "../../context"

const MovieList = () => {
    const {movieList, setMovieList} = useContext(MovieContext)
    const {showModal, setShowModal} = useState(false)
    const {source, setSource} = useState()

    const ModalDetail = (
        <Modal show={showModal} custom="true">
            <img style={{ height: "50vh" }} alt="image" role="button" src={source} onClick={()=> {setShowModal(false); setSource(null)}}></img>
        </Modal>
    )
    return (
        <div>
            {movieList.map((e)=> (
                <div  key={e.imdbID}>
                    <img 
                    role="button"
                    src={e.Poster} 
                    alt="image" 
                    onClick={()=> {
                        setShowModal(true); 
                        setSource(e.Poster)
                        }}></img>
                    <p>{e.Title}</p>
                    <p>{e.Year}</p>
                </div>
            ))}
            {ModalDetail}
        </div>
    )
}

export default MovieList