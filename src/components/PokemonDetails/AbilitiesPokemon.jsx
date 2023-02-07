import { Box, Stack, Divider } from "@mui/material";

const AbilitiesPokemon = ({ abilities }) => {
  return (
    <Stack direction={"row"}>
      <Box mr={2}>
        {abilities?.map((abilit) => (
          <Box fontSize={"18px"} fontWeight={"600"} my={1}>
            {abilit.ability.name.charAt(0).toUpperCase() +
              abilit.ability.name.slice(1)}
          </Box>
        ))}
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        color={"F00"}
        style={{ marginTop: "15px", backgroundColor: "#BBB" }}
      />
      <Box ml={2}>
        {abilities?.map((abilit) => (
          <Box fontSize={"18px"} my={1}>
            {abilit.slot}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default AbilitiesPokemon;
