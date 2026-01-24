"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, MeshStandardMaterial, Mesh, MathUtils } from "three";

interface Pointer {
  x: number;
  y: number;
}

interface ModelProps {
  pointer: Pointer;
  onLoad?: () => void;
  isReady?: boolean;
}

function Model({ pointer, onLoad, isReady = false }: ModelProps) {
  const group = useRef<Group>(null);
  const introProgress = useRef(0);
  const introStarted = useRef(false);
  const introComplete = useRef(false);
  const { scene, animations } = useGLTF("/clanker.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Notify parent that model is loaded
    onLoad?.();
  }, [onLoad]);

  useEffect(() => {
    // Play the first animation if available
    const firstAction = Object.values(actions)[0];
    if (!firstAction) return;
    firstAction.play();
  }, [actions]);

  useEffect(() => {
    // Make materials less reflective
    scene.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      if (!(child.material instanceof MeshStandardMaterial)) return;
      child.material.metalness = 0.7;
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!group.current) return;

    // Wait for isReady before starting intro animation
    if (!isReady) {
      group.current.scale.setScalar(0.01);
      return;
    }

    // Start intro when ready
    if (!introStarted.current) {
      introStarted.current = true;
    }

    // Intro animation: spin in from tiny scale
    if (!introComplete.current) {
      introProgress.current = Math.min(1, introProgress.current + delta * 0.7);
      const t = introProgress.current;

      // Standard easeOutBack curve: c1=1.70158, c3=c1+1=2.70158
      const easeOutBack = 1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2);

      // Scale from tiny to 1 with bounce
      const scale = Math.max(0.01, easeOutBack);
      group.current.scale.setScalar(scale);

      // Spin 2 full rotations during intro
      const spinProgress = Math.min(1, t * 1.2);
      const spinEase = 1 - Math.pow(1 - spinProgress, 3);
      group.current.rotation.y = (1 - spinEase) * Math.PI * 4;

      if (t >= 1) {
        introComplete.current = true;
      }
      return;
    }

    // Normal pointer-following behavior after intro
    const targetY = pointer.x * 0.5;
    const targetX = -pointer.y * 0.2;
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
  });

  return (
    <primitive ref={group} object={scene} scale={0.01} position={[0, -1, 0]} />
  );
}

function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5C0120" wireframe />
    </mesh>
  );
}

interface Scene3DProps {
  pointer: Pointer;
  onLoad?: () => void;
  isReady?: boolean;
}

export function Scene3D({ pointer, onLoad, isReady }: Scene3DProps) {
  return (
    <Canvas camera={{ position: [3, 1, 10], fov: 50 }} flat>
      <ambientLight intensity={3} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, 3, -5]} intensity={2} />
      <directionalLight position={[0, 5, 0]} intensity={1} />
      <Suspense fallback={<Fallback />}>
        <Model pointer={pointer} onLoad={onLoad} isReady={isReady} />
      </Suspense>
    </Canvas>
  );
}
