import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box pt={5}>
        <Typography
          align="center"
          sx={{
            fontSize: { xs: 30, md: 40, lg: 50 },
          }}
        >
          To do App
        </Typography>
        <Typography
          align="right"
          sx={{
            fontSize: { xs: 15, md: 25, lg: 35 },
          }}
        >
          by Ji
        </Typography>
      </Box>
    </header>
  );
}

