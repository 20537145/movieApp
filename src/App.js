import prisonBr from "./prison.jpg";
import BreakingB from './breakingb.jpg'
import dark from './dark.jpg'
import vikings from './vikings.jpg'
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import FIlter from './components/FIlter';

function App() {
  const [movies, setMovies ]= useState( [
    {
      id:0,
      title: "Prison Break",
      description:
        "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.",
      posterURL: prisonBr,
      rating: 4,
    },
    {
      id:1,
      title:'Breaking Bad',
      description:"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
      posterURL:BreakingB,
      rating:5
    },
    {
      id:2,
      title:'Dark',
      description:'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
      posterURL:dark,
      rating:5
    },{
      id:3,
      title:'Vikings',
      description:'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.',
      posterURL:vikings,
      rating:4
    }
  ])
  const addMovie= (newMovie)=> {
    setMovies((prevMovies)=> [...prevMovies, newMovie])
  }
 const [search,setSearch]= useState('')
  return (
    <div className="App">
    <FIlter setSearch={setSearch} addamovie={addMovie}/>
    <MovieList movies={movies} search={search}/>
    </div>
  );
}

export default App;
