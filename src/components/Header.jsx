import { Typography } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Typography
        align="center"
        sx={{
          fontSize: { xs: 30, md: 40, lg: 50 },
        }}
      >
        To do App by Ji
      </Typography>
    </header>
  );
}
