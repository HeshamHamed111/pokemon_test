import { Box, Divider, Stack } from "@mui/material";

const StatsPokemon = ({ stats }) => {
  console.log("stats", stats);
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Box mr={2}>
        {stats?.map((statName) => (
          <Box fontSize={"18px"} fontWeight={"600"} my={1}>
            {statName.stat.name.charAt(0).toUpperCase() +
              statName.stat.name.slice(1)}
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
        {stats?.map((statName) => (
          <Box fontSize={"18px"} my={1}>
            {statName.base_stat}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default StatsPokemon;
