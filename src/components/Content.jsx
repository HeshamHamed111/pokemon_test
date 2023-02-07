import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";

const Content = ({ searchInput }) => {
  const [pokemons, setPokemons] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=6"
  );
  const [searchResult, setSearchResult] = useState(null);

  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    if (searchInput.length === 0) {
      fetch(currentPage)
        .then((res) => res.json())
        .then((data) => {
          setNextPage(data.next);
          setPrevPage(data.previous);
          setPokemons(data);
        });
      setSearchResult(null);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}?limit=6`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(data);
        });
    }
  }, [currentPage, searchInput.length]);
  const PaginationPages = (e) => {
    if (e.target.textContent === "NEXT") {
      setCurrentPage(nextPage);
    }
    if (e.target.textContent === "PREVIOUS") {
      setCurrentPage(prevPage);
    }
  };

  return (
    <Box px={5} width={"50%"} m="auto" my={10}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        px={5}
        m="auto"
        flexWrap={"wrap"}
      >
        {searchResult ? (
          <PokemonList pokemon={searchResult} />
        ) : (
          pokemons?.results.map((pokemon) => (
            <PokemonList pokemon={pokemon && pokemon} />
          ))
        )}
      </Stack>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Button
          style={{
            backgroundColor: prevPage ? "#de4b4b" : "#DDD",
            color: prevPage ? "#FFF" : "#666",
            width: "130px",
          }}
          onClick={PaginationPages}
        >
          PREVIOUS
        </Button>
        <Button
          style={{
            backgroundColor: nextPage ? "#de4b4b" : "#DDD",
            color: nextPage ? "#FFF" : "#666",
            width: "130px",
          }}
          onClick={PaginationPages}
        >
          NEXT
        </Button>
      </Stack>
    </Box>
  );
};

export default Content;
