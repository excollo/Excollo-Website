import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material";

const cardData = [
  {
    title: "AI & Automation",
    description:
      "From intelligent chatbots to workflow automation, we bring AI solutions that optimize operations and reduce costs.",
  },
  {
    title: "Product Development",
    description:
      "Scalable websites, web apps, and mobile apps tailored to your business’s unique needs.",
  },
  {
    title: "Tech Consultancy",
    description:
      "Identify gaps in processes, align technology to bridge those gaps, and implement transformative solutions tailored for success.",
  },
  {
    title: "Sales Channel Development",
    description:
      "Set up or enhance e-commerce and WhatsApp sales channels to unlock new growth avenues.",
  },
  {
    title: "Machine Learning Driven Data Analysis",
    description: "Harness cutting-edge machine learning to decode data, predict trends, and empower precise, forward-thinking business strategies.",
  },
];

const CardDesign = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "20px",
  position: "relative",
  height: "100vh",
  padding: "20px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

const CardContainer = styled(Card)(({ isHovered }) => ({
  width: isHovered ? "300px" : "250px",
  height: isHovered ? "400px" : "350px",
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  background: `linear-gradient(145deg, #05000a, #38234d)`,
  boxShadow: isHovered
    ? "0px 10px 30px rgba(0, 0, 0, 0.6)"
    : "0px 5px 15px rgba(0, 0, 0, 0.3)",
  transition: "all 0.4s ease",
  zIndex: isHovered ? 2 : 1,
  borderRadius: "15px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",
}));

const HeroPageSection3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ color: "#fff" }}>
        Our{" "}
        <Box
          component="span"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Excollo?
        </Box>
      </Typography>
      <CardDesign>
        {cardData.map((card, index) => (
          <CardContainer
            key={index}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  background:
                    "linear-gradient(to bottom right ,#2579e3, #8e54f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{ marginTop: "10px", fontSize: "14px", color: "#ddd" }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardContainer>
        ))}
      </CardDesign>
    </Box>
  );
};

export default HeroPageSection3;
