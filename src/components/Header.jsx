import { Typography, Box } from "@mui/material";
import { BsStars } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <Box pt={5}>
        <Typography
          fontWeight={700}
          style={{ textShadow: "5px 5px 0px #efbce5" }}
          align="center"
          sx={{
            fontSize: { xs: 50, md: 60, lg: 70 },
          }}
        >
          To do App
        </Typography>
        <Typography
          fontWeight={400}
          fontStyle="italic"
          align="right"
          sx={{
            fontSize: { xs: 20, md: 30, lg: 40 },
          }}
        >
          by Ji <BsStars color="#fee440" />
        </Typography>
      </Box>
    </header>
  );
}
