import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const HeroPageSection5 = () => {
  const steps = [
    {
      icon: (
        <Box
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            marginLeft: "45%",
          }}
        />
      ),
      title: "Understand Your Needs",
      description: "In-depth discovery to align with your business goals.",
    },
    {
      // Updated this section to use a bulb icon
      icon: (
        <Box
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M9 21h6v-2H9v2zm3-19a7 7 0 0 0-7 7c0 2.62 1.64 4.87 4 5.65V17a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.35c2.36-.78 4-3.03 4-5.65a7 7 0 0 0-7-7z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            marginLeft: "45%",
          }}
        />
      ),
      title: "Craft a Tailored Plan",
      description:
        " Strategy, implementation, and optimization designed for measurable outcomes.",
    },
    {
      icon: (
        <Box
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M19.41 7.41 12 14.83 8.59 11.41 7.17 12.83l4.83 4.83 8.25-8.25z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            marginLeft: "43%",
          }}
        />
      ),
      title: "Deliver and Iterate",
      description:
        "Continuous improvement ensures solutions stay ahead of the curve.",
    },
  ];

  return (
    <Box sx={{ color: "#fff", py: 5, px: 2 }}>
      <Box
        sx={{
          minHeight: "100vh",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: '"Inter", sans-serif',
          background: `radial-gradient(closest-side, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 75%)`,
          position: "relative",
          zIndex: 0,
        }}
      >
        {/* Main Heading */}
        <Box sx={{ textAlign: "center", mb: 13 }}>
          <Typography variant="h3" fontWeight="bold">
            How We{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work?
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, maxWidth: "600px", mb: 5 }}>
            Form a custom AI workforce in just a few clicks using our modular
            builder. Combine any agent from the marketplace and achieve goals
            that go far beyond the capabilities of any agent or platform in
            isolation.
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                textAlign: "center",
                borderRadius: 2,
                p: 3,
              }}
            >
              <Box sx={{ mb: 2 }}>{step.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body2">{step.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroPageSection5;

