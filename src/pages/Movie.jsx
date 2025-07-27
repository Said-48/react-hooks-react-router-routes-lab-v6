import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();

  // Time is now a number to match test expectations
  const movies = [
    {
      id: 1,
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"]
    },
    {
      id: 2,
      title: "Inception",
      time: 148,
      genres: ["Sci-Fi", "Thriller"]
    }
  ];

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre, i) => (
          <span key={i}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
