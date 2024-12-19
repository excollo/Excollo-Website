import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ThreeDE from "../Components/ThreeDE";
import NavBar from "../Components/NavBar";
import HeroPageSection1 from "../Components/HeroPageSection1";
import HeroPageSection2 from "../Components/HeroPageSection2";
import HeroPageSection3 from "../Components/HeroPageSection3";
import HeroPageSection4 from "../Components/HeroPageSection4";
import HeroPageSection5 from "../Components/HeroPageSection5";
import HeroPageSection6 from "../Components/HeroPageSection6";
import HeroPageSection7 from "../Components/HeroPageSection7";
import Footer from "../Components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {
  const [showThreeDE, setShowThreeDE] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hero1Complete, setHero1Complete] = useState(false);
  const [hero2Complete, setHero2Complete] = useState(false);
  const [hasMovedRight, setHasMovedRight] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      !hero1Complete || showThreeDE ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hero1Complete, showThreeDE]);

  useEffect(() => {
    const rotationDuration = 2;
    const timer = setTimeout(() => {
      setShowThreeDE(false);
    }, rotationDuration * 1000);
    return () => clearTimeout(timer);
  }, []);

  // Initial animations
  useEffect(() => {
    if (!showThreeDE) {
      const timeline = gsap.timeline({
        onComplete: () => setHasMovedRight(true),
      });

      // Move the "e" object to the right
      timeline.to(".threeDE", {
        x: "24%", // Move slightly to the right
        duration: 1.5,
        ease: "power2.out",
      });

      // Show the gradient background
      timeline.to(".gradient-background", {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });

      // Show the navbar content
      timeline.to(".navbar", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      });

      timeline.to(".hero-gradient", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      timeline.to(".hero-content", {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setAnimationComplete(true);
          setTimeout(() => {
            setHero1Complete(true);
          }, 500);
        },
      });
    }
  }, [showThreeDE]);

  // Scroll animation for HeroSection2
  useEffect(() => {
    if (hero1Complete) {
      gsap.fromTo(
        ".hero-section-2",
        {
          x: "100%", // Start from right (outside viewport)
          opacity: 0,
        },
        {
          x: 0, // Move to original position
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-section-2",
            start: "top center", // Animation starts when top of section reaches center of viewport
            end: "top center",
            toggleActions: "play none none reverse", // Play animation when scrolling down, reverse when scrolling up
          },
        }
      );

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [hero1Complete]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        position: "relative",
        overflow: "hidden", // Ensure no overflow
      }}
    >
      <Box
        className="threeDE"
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          position: showThreeDE ? "absolute" : "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <ThreeDE />
        </Box>
      </Box>
      {!showThreeDE && (
        <>
          <Box
            className="gradient-background"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "150px",
              background: `radial-gradient(ellipse at top, rgba(154, 106, 255, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
              zIndex: 0,
              opacity: 0,
            }}
          />

          <Box
            className="navbar"
            sx={{
              position: "relative",
              zIndex: 1,
              opacity: 0,
              transform: "translateX(-100px)",
            }}
          >
            <NavBar />
          </Box>

          <Box
            className="hero-content"
            sx={{
              display: "flex",
              position: "relative",
              zIndex: 1,
              opacity: 0,
              transform: "translateX(100px)",
            }}
          >
            <HeroPageSection1 animationComplete={animationComplete} />
          </Box>

          <Box sx={{ visibility: hero1Complete ? "visible" : "hidden" }}>
            <Box className="hero-section-2">
              <HeroPageSection2 />
            </Box>
            <HeroPageSection3 />
            <HeroPageSection4 />
            <HeroPageSection5 />
            <HeroPageSection6 />
            <HeroPageSection7 />
            <Footer />
          </Box>
        </>
      )}
    </Box>
  );
};

export default HeroPage;
