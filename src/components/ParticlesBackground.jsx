
import React, { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: false,
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 30, // Reduced from 120 to 30 for better performance
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 2
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 0.5
      },
      collisions: {
        enable: false // Disabled for better performance
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1500 // Increased for better spacing
        },
        value: 30 // Reduced for better performance
      },
      opacity: {
        value: 0.15
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 0.5, max: 1.5 }
      }
    },
    detectRetina: true
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 w-full h-full"
      style={{
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default ParticlesBackground;
