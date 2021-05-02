import React from "react";
import Row from "../Row";
import requests from "../request";
import Nav from "../Nav";
import Banner from "../Banner";
import "./main-screen.css";
import Footer from "../Footer";

function MainScreen() {
  return (
    <div className="main-screen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default MainScreen;
