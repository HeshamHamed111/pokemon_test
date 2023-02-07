import { Box, Chip, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonList = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((res) => res.json())
      .then((json) => setPokemonInfo(json));
  }, [pokemon]);

  return (
    <Box width={"30%"} mb={7} border={"1px solid #CCC"} borderRadius={2}>
      <Box
        bgcolor={"#EEE"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mb={1}
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`pokemon/${pokemonInfo.id}`)}
      >
        <img src={pokemonInfo?.sprites.front_default} alt="img" width="150px" />
      </Box>
      <Box p={2}>
        <Box mb={2} fontWeight={"600"} fontSize="20px">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Box>
        <Stack direction={"row"}>
          {pokemonInfo?.types?.map((typePokemon, index) => (
            <Box
              bgcolor={
                typePokemon.type.name === "fire" ||
                typePokemon.type.name === "flying"
                  ? index === 1
                    ? "#EEE"
                    : "#f35151"
                  : index === 1
                  ? "#66ca6b"
                  : "#92e696"
              }
              px={"10px"}
              py="5px"
              ml={index === 1 ? 1 : 0}
              borderRadius={"20px"}
              fontSize="14px"
              fontWeight={"600"}
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              {typePokemon.type.name.charAt(0).toUpperCase() +
                typePokemon.type.name.slice(1)}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default PokemonList;
