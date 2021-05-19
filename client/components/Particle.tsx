import Particles from 'react-tsparticles'

function Particle() {
  return (
    <Particles
      style={{ zIndex: 0 }}
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              size: 40,
            },
          },
        },
        particles: {
          color: {
            value: ['#69d5b5', '#a7eea8', '#fed058', '#ff8d7a', '#bfdbdc', '#6182e3', '#c39eec'],
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 5,
            size: true,
            straight: false,
            trail: {
              fillColor: '#fff',
              enable: true,
              length: 3,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: ['circle', 'square'],
          },
          rotate: {
            value: 0,
            direction: 'random',
            animation: {
              enable: true,
              speed: 10,
            },
          },
          size: {
            random: {
              enable: true,
              minimumValue: 5,
            },
            animation: {
              enable: true,
              speed: 6,
              minimumValue: 5,
            },
            value: 15,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Particle
