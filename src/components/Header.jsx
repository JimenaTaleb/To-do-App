import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box pt={5}>
        <Typography
          fontWeight={700}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          align="center"
          sx={{
            fontSize: { xs: 40, md: 50, lg: 60 },
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
          by Ji
        </Typography>
      </Box>
    </header>
  );
}
