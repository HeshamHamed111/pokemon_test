import { Box, Input, Stack, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import pokemon from "../assets/images/pokemon.png";
const Header = ({ searchInput, setSearchInput }) => {
  return (
    <Stack
      bgcolor={"#e06767"}
      py={1}
      px={3}
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction="row" alignItems={"center"} spacing={2}>
        <img src={pokemon} style={{ width: 120 }} />{" "}
        <Box color={"white"} fontSize={20}>
          Pokemon Gallery
        </Box>
      </Stack>
      <Box>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Stack>
  );
};

export default Header;
