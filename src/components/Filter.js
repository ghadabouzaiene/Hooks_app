import React from 'react'
import Card from './Card'
import './movieList.css'
const Filter = ({movieList,search,tabStar}) => {
    return (
        
        <div className='movie-list'>
          {movieList.filter(el=>el.rating>=tabStar.filter(el=>el.isColored).length).filter((movie)=> movie.title.toUpperCase().match(search.toUpperCase()))
          .map((movie)=> {return <Card movieCard={movie}/>})}
        </div>
    )
}

export default Filter ;