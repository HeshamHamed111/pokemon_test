import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HeaderPokemon from "../components/PokemonDetails/HeaderPokemon";
import StatsPokemon from "../components/PokemonDetails/StatsPokemon";
import MoviesPokemon from "../components/PokemonDetails/MoviesPokemon";
import AbilitiesPokemon from "../components/PokemonDetails/AbilitiesPokemon";
const PokemonDetails = () => {
  const params = useParams();
  const { pokemonId } = params;
  const [pokemonDetail, setPokemonDetail] = useState();
  const [activeLink, setActiveLink] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((json) => setPokemonDetail(json));
  }, []);

  return (
    <Box px={5} width={"50%"} m="auto" my={5}>
      <Button
        style={{
          backgroundColor: "#de4b4b",
          color: "#FFF",
          fontSize: "14px",
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingTop: "7px",
          paddingBottom: "7px",
        }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIosIcon style={{ fontSize: "12px", marginRight: "10px" }} />{" "}
        Back
      </Button>
      <Box mt={5} px={4} py={5} boxShadow={"1px 1px 7px #888"} height={500}>
        <HeaderPokemon
          pokemonImg={pokemonDetail?.sprites.front_default}
          pokemonName={pokemonDetail?.species.name}
          pokemonTypes={pokemonDetail?.types}
        />
        <Box mt={2} px={1}>
          <Stack direction={"row"}>
            <Box
              color={activeLink === 1 ? "#0b95ca" : "#000"}
              borderBottom={activeLink === 1 ? "1px solid #0b95ca" : "none"}
              pb={1}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveLink(1)}
            >
              STATS
            </Box>
            <Box
              mx={3}
              color={activeLink === 2 ? "#0b95ca" : "#000"}
              borderBottom={activeLink === 2 ? "1px solid #0b95ca" : "none"}
              pb={1}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveLink(2)}
            >
              MOVES
            </Box>
            <Box
              color={activeLink === 3 ? "#0b95ca" : "#000"}
              borderBottom={activeLink === 3 ? "1px solid #0b95ca" : "none"}
              pb={1}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveLink(3)}
            >
              ABILITIES
            </Box>
          </Stack>
          <Box mt={2}>
            {activeLink === 1 && <StatsPokemon stats={pokemonDetail?.stats} />}
            {activeLink === 2 && (
              <MoviesPokemon movies={pokemonDetail?.moves} />
            )}
            {activeLink === 3 && (
              <AbilitiesPokemon abilities={pokemonDetail?.abilities} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetails;
