import { useSearchParams } from "react-router-dom";
import { PeliculasGrid } from "../componentes/PeliculasGrid";
import { Search } from "../componentes/Search";
import { useDebounce } from "../hooks/useDebounce";

export function PaginaInicio() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 400);
  return (
    <div>
      <Search />
      <PeliculasGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  );
}
