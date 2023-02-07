import { Box, Stack } from "@mui/material";

const HeaderPokemon = ({ pokemonImg, pokemonName, pokemonTypes }) => {
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"cenyter"}>
        <img src={pokemonImg} style={{ width: "150px" }} />
        <Box ml={3}>
          <Box fontSize={"60px"} mb={1}>
            {pokemonName}
          </Box>
          <Stack direction={"row"}>
            {pokemonTypes?.map((typePokemon, index) => (
              <Box
                bgcolor={index === 1 ? "#66ca6b" : "#92e696"}
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
      </Stack>
    </Box>
  );
};

export default HeaderPokemon;
