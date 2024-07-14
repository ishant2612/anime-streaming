import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    try {
      const respone = await axios.get("https://api.jikan.moe/v4/top/anime");
      console.log("Top anime", respone)
      setTopAnime(respone.data.data);
    } catch (error) {
      if (error.respone & error.response.status == 429) {
        console.log("Too many requests");
      }
      else {
        console.log("Failed to load");

      }
      console.log("Error fetching anime", error);
    }

  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search", search);
    fetchAnime(search);
  }

  const fetchAnime = async (query) => {
    try {
      const respone = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
      console.log("Anime", respone);
      setAnimeList(respone.data.data);
    } catch (error) {
      if (error.respone & error.response.status == 429) {
        console.log("Too many requests");
      }
      else {
        console.log("Failed to load");

      }
      console.log("Error fetching anime", error);
    }

  };

  useEffect(() => {
    getTopAnime();

  }, [])

  useEffect(() => {
    console.log("Anime list", animeList);
  }, [animeList])
  return (
    <div className='App'>
      <Header />

      <Home
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
        animeList={animeList}
        topAnime={topAnime}
      />
      <Footer />

    </div>
  )
}

export default App