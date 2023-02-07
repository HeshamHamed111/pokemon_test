import { Box } from "@mui/material";

const MoviesPokemon = ({ movies }) => {
  return (
    <Box style={{ overflowY: "scroll", maxHeight: "300px" }}>
      {movies?.map((movie) => (
        <Box fontSize={"18px"} fontWeight={"600"} my={1}>
          {movie.move.name.charAt(0).toUpperCase() + movie.move.name.slice(1)}
        </Box>
      ))}
    </Box>
  );
};

export default MoviesPokemon;
