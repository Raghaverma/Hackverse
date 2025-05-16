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
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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

// SVG Dot Grid Background with Parallax
function DotGridBG({ dotColor = '#2563eb', bgColor = '#f3f4f6', dotRadius = 2, spacing = 32, parallax = 0.2 }) {
  const [dims, setDims] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    const onResize = () => setDims({ width: window.innerWidth, height: window.innerHeight });
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const cols = Math.ceil(dims.width / spacing);
  const rows = Math.ceil(dims.height / spacing);
  return (
    <svg
      width={dims.width}
      height={dims.height}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        display: 'block',
        background: bgColor,
        transform: `translateY(${scrollY * parallax}px)`,
        willChange: 'transform',
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => {
        const x = (i % cols) * spacing;
        const y = Math.floor(i / cols) * spacing;
        return <circle key={i} cx={x} cy={y} r={dotRadius} fill={dotColor} />;
      })}
    </svg>
  );
}

const InteractiveHero: React.FC = () => {
  return (
    <section className="w-full h-screen min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans p-0 m-0">
      {/* SVG Dot Grid on Grayish Background */}
      <DotGridBG dotColor="#2563eb" bgColor="#f3f4f6" dotRadius={2} spacing={32} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-primary mb-2 uppercase">WELCOME TO</h1>
        <div className="mb-6">
          <RotatingText texts={["Hackverse", "Innovation", "Imagination", "Creativity", "Collaboration", "Impact"]} className="text-primary text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg" />
        </div>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Your email address"
            required
            aria-label="Email Address"
            className="flex-grow w-full sm:w-auto px-5 py-3 rounded-lg bg-white border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium text-base"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-primary text-white px-7 py-3 rounded-lg text-base font-bold hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap shadow-md hover:shadow-lg flex-shrink-0"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </section>
  );
};

export default InteractiveHero; 