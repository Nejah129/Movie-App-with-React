import React from 'react'
import StarRating from '../StarRating'

const Surch = ({text,rating,handelChange,handelRating}) => {
    return (
        <div>
            <form >
                <input type="text"  value={text} onChange={handelChange}/>
                <StarRating  rating={rating} handelRating={handelRating}/>
            </form>
        </div>
    )
}

export default Surch
