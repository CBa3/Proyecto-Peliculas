import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../componentes/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./PeliculaDetalles.module.css";

export function PeliculaDetalles() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner/>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={styles.detallesContenedor}>
      <img
        className={`${styles.columna} ${styles.peliculaImage}`}
        src={imageUrl}
        
        alt={movie.title}
      />
      <div className={`${styles.columna} ${styles.peliculaDetalles}`}>
        <p className={styles.primerItem}>
          <strong>Titulo:</strong> {movie.title}
        </p>
        <p>
          <strong>Generos:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descripción:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
