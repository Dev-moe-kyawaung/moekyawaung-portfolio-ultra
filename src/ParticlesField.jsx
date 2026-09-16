import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2200;

export default function ParticlesField() {
  const pointsRef = useRef();
  const { size, viewport } = useThree();

  const particles = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    const color1 = new THREE.Color("#7c5cff");
    const color2 = new THREE.Color("#00e5ff");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      pos[i3] = (Math.random() - 0.5) * 25;
      pos[i3 + 1] = (Math.random() - 0.5) * 25;
      pos[i3 + 2] = (Math.random() - 0.5) * 25;

      const t = Math.random();
      const c = color1.clone().lerp(color2, t);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    return { pos, colors };
  }, []);

  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    if (!pointsRef.current) return;

    const x = state.pointer.x || 0;
    const y = state.pointer.y || 0;
    mouse.current.set(x, y);

    pointsRef.current.rotation.y += 0.0009;
    pointsRef.current.rotation.x += 0.0004;

    const time = state.clock.elapsedTime;
    const amp = 1.6;
    const freq = 0.9;

    target.current.set(
      Math.sin(time * freq) * amp * x,
      Math.cos(time * freq * 0.7) * amp * y,
      Math.sin(time * freq * 0.5) * amp * 0.6
    );

    pointsRef.current.position.lerp(target.current, 0.02);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.pos.length / 3}
          array={particles.pos}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
