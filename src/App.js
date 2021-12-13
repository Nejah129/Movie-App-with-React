
import { useState } from 'react';
import './App.css';
import { moviesData } from './data';
import MovieList from './components/MovieList'
import Add from './components/Add';
import Surch from './components/Surch';

function App() {
  const [movies, setMovies] = useState(moviesData)
const [text, setText] = useState("")
const [stars, setStars] = useState("")
  // add a new Movie
  let handelAdd=(newmovie)=>{
    setMovies([...movies,newmovie])
  }
  // handel the Stars
  let handelRating=(x)=>setStars(x)
  //change in the input of search
  let HandelChange=(e)=>{setText(e.target.value)}
  return (
    <div className="App">
      <Surch text={text} rating={stars} handelChange={HandelChange}  handelRating={handelRating}
      />
     <MovieList list={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&(el.rating>=stars))}/>
     <Add add={handelAdd}/>
    </div>
  );
}

export default App;
