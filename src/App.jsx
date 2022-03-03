import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { PeliculaDetalles } from "./paginas/PeliculaDetalles";
import { PaginaInicio } from "./paginas/PaginaInicio";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Películas</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<PeliculaDetalles/>} />
          <Route path="/" element={<PaginaInicio/>} />
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Routes>
      </main>
    </Router>
  );
}
