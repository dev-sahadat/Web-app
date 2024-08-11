
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import { color, distance } from 'framer-motion';

const ParticlesContainer = () => {
  // inft
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoader = useCallback(async () => {}, []);


  return (
    <Particles 
    className='w-full w-full absolute translate-z-0'
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoader}
    options={{
      fullScreen: { enable: false },
      background: {
        color: {
          value: '',
        },
      },
      fps_limit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      },
      particles: {
        color: {
          value: '#e68e2e',
        },
        links: {
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true,
        },
        move: {
           direction: 'none',
           enable: true,
           outModes: {
            default: 'bounce'
           },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value:480
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
     }}
    />
  );
};

export default ParticlesContainer;
