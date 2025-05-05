"use client";

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useMemo,
    type ReactNode,
    type MouseEvent as ReactMouseEvent,
    type FormEvent,
    type SVGProps,
} from 'react';
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
    type Transition,
    type VariantLabels,
    type Target,
    type AnimationControls,
    type TargetAndTransition,
    type Variants,
} from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const RotatingText = forwardRef<HTMLSpanElement, RotatingTextProps>(({ texts, interval = 2000, className = '' }, ref) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % texts.length), interval);
    return () => clearInterval(id);
  }, [texts.length, interval]);
  return (
    <span ref={ref} className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

// 3D Glowing Mesh Grid
function GlowingGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);
  useFrame((state) => {
    t.current += 0.004;
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const pos = geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = Math.sin(x * 2 + t.current) * 0.18 + Math.cos(y * 2 + t.current) * 0.18;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
    }
    // Camera parallax
    state.camera.position.x = Math.sin(t.current * 0.15) * 0.3;
    state.camera.position.y = Math.cos(t.current * 0.12) * 0.15;
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
      <planeGeometry args={[12, 12, 64, 64]} />
      <meshBasicMaterial color="#0CF2A0" wireframe opacity={0.5} transparent />
    </mesh>
  );
}

const InteractiveHero: React.FC = () => {
  return (
    <section className="w-full h-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#09090b] to-[#18181b] text-white relative overflow-hidden font-sans p-0 m-0">
      {/* 3D Glowing Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 3, 6], fov: 60 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.8} />
          <GlowingGrid />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/60 to-[#18181b]" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-primary mb-2 uppercase">WELCOME TO</h1>
        <div className="mb-6">
          <RotatingText texts={["Hackverse", "Innovation", "Imagination", "Creativity", "Collaboration", "Impact"]} className="text-primary text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg" />
        </div>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl text-center mb-8 font-medium">
          Join the world's most exciting hackathons, collaborate with top talent, and build the future of technology.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Your email address"
            required
            aria-label="Email Address"
            className="flex-grow w-full sm:w-auto px-5 py-3 rounded-lg bg-[#18181b] border border-[#27272a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-base"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-black px-7 py-3 rounded-lg text-base font-bold hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap shadow-md hover:shadow-lg flex-shrink-0"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </section>
  );
};

export default InteractiveHero; 