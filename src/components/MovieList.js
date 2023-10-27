import React from 'react'

import MovieCard from './MoviesCard'

function MovieList({movies,search}) {
  return (
    <div className='hola'>
        {movies.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase().trim())).map((e,key)=><MovieCard key={e.id} hello={e} />)}
    </div>
  )
}

export default MovieList