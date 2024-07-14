import React from 'react'
import "./Home.css"
import AnimeCard from './AnimeCard'
function Home({ handleSearch, search, setSearch, animeList, topAnime }) {
    console.log("Anime list", animeList);
    console.log("Top anime", topAnime);
    return (
        <main>
            <div className='home'>
                <form className='search-box' onSubmit={handleSearch}>
                    <input className='search-input' type='search' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)

                    } required />
                </form>
            </div>

            <div className='card-main'>
                {animeList && animeList.length > 0 ? (animeList.map((anime) => <AnimeCard anime={anime} key={anime.mal_id} />)) : topAnime && topAnime.length > 0 ? (topAnime.map((anime) => <AnimeCard anime={anime} key={anime.mal_id} />)) : (<p>No results found</p>)}

            </div>
        </main>
    )
}

export default Home