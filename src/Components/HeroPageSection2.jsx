// HeroPageSection2.jsx
import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection2 = ({ onAnimationComplete }) => {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const contentRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const gradient = gradientRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;

    // Create a GSAP timeline for the scroll effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "+=300",
        toggleActions: "play none none reverse",
        onComplete: () => {
          // Notify parent when all animations are complete
          setTimeout(() => {
            onAnimationComplete();
          }, 500); // Small buffer after animations finish
        },
      },
    });

    // First animate the gradient
    tl.fromTo(
      gradient,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    )
      // Then animate the description
      .fromTo(
        description,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Finally animate the button
      .fromTo(
        button,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
        fontFamily: '"Inter", sans-serif',
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <Box
        ref={gradientRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(closest-side, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 75%)`,
          zIndex: 0,
        }}
      />

      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "2rem",
            position: "relative",
            zIndex: 1,
            marginTop: "3rem",
            marginLeft: "45%",
          }}
        >
          <Box>
            <Typography
              ref={descriptionRef}
              variant="h5"
              color="white"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "1.3rem" },
                lineHeight: 1.3,
                mb: 10,
              }}
            >
              Excollo delivers outcomes, <br />
              leveraging AI to make businesses <br />
              future-ready, boosting <br />
              productivity and efficiency at <br />
              every step.
            </Typography>

            <Typography
              ref={buttonRef}
              component="a"
              href="#whatwedo"
              sx={{
                display: "inline-block",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "16px",
                border: "1px solid transparent",
                padding: "20px 80px",
                borderRadius: "40px",
                background:
                  "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%);",
                  color: "#ffffff",
                },
              }}
            >
              What We Do
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPageSection2;
