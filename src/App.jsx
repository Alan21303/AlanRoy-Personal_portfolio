import React from "react";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsHighlights from "./components/highlighted-projects/projects-highlights";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import DotGrid from "./components/DotGrid/DotGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* DotGrid background */}
      <DotGrid
        dotSize={2}
        gap={30}
        baseColor="#3f3d3dff"
        activeColor="#ff8400"
        proximity={320}
        shockRadius={150}
        shockStrength={10}
        resistance={800}
        returnDuration={1.5}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // behind all content
        }}
      />

      {/* Main content */}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsHighlights />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
