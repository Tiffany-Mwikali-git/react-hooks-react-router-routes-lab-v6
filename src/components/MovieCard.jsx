// src/components/MovieCard.js
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
      <h2>
        <Link to={/movie/${movie.id}}>{movie.title}</Link>
      </h2>
    </article>
  );
}

export default MovieCard