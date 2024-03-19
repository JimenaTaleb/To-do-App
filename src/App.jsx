import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import backgroundImage from "./assets/background.jpg";
import Box from "@mui/material/Box";

function App() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
      <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" height="100%" style={divStyle}>
        <Header />
        <Container />
        <Footer />
      </Box>
  );
}

export default App;
