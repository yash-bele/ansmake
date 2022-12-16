import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particlesData } from './ParticlesData';

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className='absolute w-screen h-screen -z-50'
      id='tsparticles'
      init={particlesInit}
      options={particlesData}
    />
  );
};

export default ParticlesBG;
