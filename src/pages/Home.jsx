import { Box } from "@mui/material";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = ({ searchInput }) => {
  return (
    <Box>
      <Content searchInput={searchInput} />
    </Box>
  );
};

export default Home;
