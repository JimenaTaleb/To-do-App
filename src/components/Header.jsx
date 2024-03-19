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
            fontSize: { xs: 30, md: 40, lg: 50 },
          }}
        >
          To do App
        </Typography>
        <Typography
          fontWeight={400}
          fontStyle="italic"
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
