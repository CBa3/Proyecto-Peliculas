import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export function Search(){
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <form className={styles.busquedaContenedor} onSubmit={handleSubmit}>
            <div className={styles.busquedaBox}>
                <input 
                    className={styles.busquedaInput} 
                    type="text" 
                    value={search ?? ""}
                    autoFocus
                    placeholder="Título"
                    aria-label="Buscar Películas" 
                    onChange={(e) => {
                        const value = e.target.value;
                        setQuery({search: value});
                    }}
                />
                <FaSearch size={20} color="black" className={styles.busquedaButton} />
            </div>
        </form>
    );
}