import React from 'react';
import './App.css';
import requests from "./requests";
import NavBar from "./Components/NavBar/NavBar";
import Row from "./Components/Row/Row.jsx";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="app">
        <NavBar />
        <Banner />
        <Row title="NETFLIX ORIGINAL" isLargeRow={true}
             fetchUrl={requests.fetchNetflixOriginal}/>
        <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
