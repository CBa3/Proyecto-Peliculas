import { Link } from "react-router-dom";
import styles from "./PeliculaCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function PeliculaCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
  return (
    <li className={styles.peliculaCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.peliculaImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
