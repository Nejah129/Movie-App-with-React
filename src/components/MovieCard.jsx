import React from 'react'
import StarRating from '../StarRating'

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <StarRating rating={movie.rating}/>
            <img src={movie.image} alt=""  />
            <h3>{movie.date}</h3>
            <h3>{movie.name}</h3>
        </div>
    )
}

export default MovieCard
