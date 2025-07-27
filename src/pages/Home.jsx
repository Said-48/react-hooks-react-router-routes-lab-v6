import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const data = [
      { id: 1, title: "Doctor Strange" },
      { id: 2, title: "The Imitation Game" },
      { id: 3, title: "Black Mass" },
    ];
    setMovies(data);
  }, []);
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
};

export default Home;