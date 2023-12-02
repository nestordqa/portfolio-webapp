import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import ParticlesConfig from '../scripts/ParticlesConfig.js'

function ParticlesAnimation() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={ParticlesConfig}
            />
        </>
    )
}
export default ParticlesAnimation