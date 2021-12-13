import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list}) => {
    return (
        <div className="movie-list">
            {
                list.map((el,index)=><MovieCard movie={el} key={index}/>)
            }
        </div>
    )
}

export default MovieList
