import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="fade-top"></div>

        <div className="banner_content">
          {/* title */}

          <div className="banner_title">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          </div>

          <div className="banner_buttons">
            <button className="banner_btn">Play</button>
            <button className="banner_btn">My List</button>
          </div>
          {/* Button */}
          {/* descriptions */}

          <div className="banner_desc">
            <h3>{truncate(movie?.overview, 160)}</h3>
          </div>
        </div>

        <div className="fade-bottom"></div>
      </header>
    </div>
  );
}

export default Banner;
