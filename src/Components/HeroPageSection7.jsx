import { Box, Divider } from "@mui/material";
import React from "react";
import Logo from "../assets/logo/excollo3d.png";

const HeroPageSection7 = () => {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        ml={-3}
        sx={{ position: "relative" }}
      >
        <img src={Logo} alt="" style={{ height: "300px", width: "auto" }} />
      </Box>

      {/* Divider with white light effect */}
      <Box sx={{ position: "relative", my: 4, mx: 17 }}>
        <Divider
          sx={{
            backgroundColor: "grey.800",
            height: "2px", // Divider thickness
            position: "relative",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroPageSection7;
