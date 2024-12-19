import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const FeatureCard = ({ title, description }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        background: `linear-gradient(145deg, #05000a, #432d5a)`,
        borderRadius: "12px",
        textAlign: "center",
        padding: "2rem",
        height: "100%", // Adjusted for equal height
        width: "50%", // Takes full width of Grid item
        display: "flex",
        marginLeft: "11%",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "#2c2c2c",
          transition: "all 0.3s ease",
          transform: "translateY(-5px)",
        },
      }}
    >
      {/* Title with Gradient */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{
          background: "linear-gradient(to bottom right, #2579e3, #8e54f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: "2rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="white"
        sx={{ fontFamily: '"Inter", sans-serif' }}
      >
        {description}
      </Typography>
    </Paper>
  );
};


const HeroPageSection4 = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: '"Inter", sans-serif', // Apply Inter font globally
        background: `radial-gradient(closest-side, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 80%)`,
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Main Heading */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight="bold">
          Why Choose <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Excollo?
          </Box>
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: "600px", mb: 5 }}>
          Form a custom AI workforce in just a few clicks using our modular
          builder. Combine any agent from the marketplace and achieve goals that
          go far beyond the capabilities of any agent or platform in isolation.
        </Typography>
      </Box>

      {/* Feature Boxes */}
      <Grid
        container
        justifyContent="center"
        sx={{
          position: "relative", // Ensure that the absolute positioned Box is correctly placed
          height: "150%", // Full height of the container
          width: "90%", // Full width of the container
        }}
      >
        {/* Outcome as a Service */}
        <Grid item xs={16} md={4}>
          <FeatureCard
            title="Outcome as a Service"
            description="We deliver tangible results-like increased sales or operational efficiency-not just products"
          />
        </Grid>

        {/* Iterative Excellence */}
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Iterative Excellence"
            description="Our solutions evolve with your business, ensuring long-term success."
          />
        </Grid>

        {/* Future-Forward Strategies */}
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Future-Forward Strategies"
            description="Cutting-edge AI and automation drive scalable, innovative solutions."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroPageSection4;
