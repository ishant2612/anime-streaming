import React from 'react'
import "./AnimeCard.css"
function AnimeCard({ anime }) {
    return (
        <a className='card-body' href={anime.url} target='_blank' rel='noopener noreferrer'>
            <figure className='card-fig'>
                <img className='card-img' src={anime.images.jpg.image_url} alt={anime.title} />
            </figure>
            <h3 className='card-title'>{anime.title}</h3>
        </a>
    )
}

export default AnimeCard