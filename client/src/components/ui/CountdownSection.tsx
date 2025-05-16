import { useState, useEffect, useRef, forwardRef } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = forwardRef(({ texts, interval = 2000, className = '' }, ref) => {
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

function GlowingGrid() {
  const meshRef = useRef(null);
  const t = useRef(0);
  useFrame((state) => {
    t.current += 0.004;
    if (meshRef.current) {
      const geometry = meshRef.current.geometry;
      const pos = geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = Math.sin(x * 2 + t.current) * 0.18 + Math.cos(y * 2 + t.current) * 0.18;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
    }
    state.camera.position.x = Math.sin(t.current * 0.15) * 0.3;
    state.camera.position.y = Math.cos(t.current * 0.12) * 0.15;
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
      <planeGeometry args={[12, 12, 64, 64]} />
      <meshBasicMaterial color="#2563eb" wireframe opacity={0.7} transparent />
    </mesh>
  );
}

const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date(Date.UTC(2025, 9, 8, 0, 0, 0));
        const calculateTimeLeft = () => {
            const now = new Date();
            const nowUTC = new Date(Date.UTC(
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate(),
                now.getUTCHours(),
                now.getUTCMinutes(),
                now.getUTCSeconds()
            ));
            const difference = targetDate.getTime() - nowUTC.getTime();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-blue-900 relative overflow-hidden font-sans p-0 m-0">
            {/* 3D Blue Grid on White Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 4, 6], fov: 60 }} style={{ background: 'white' }} gl={{ alpha: false }}>
                    <ambientLight intensity={0.8} />
                    <GlowingGrid />
                </Canvas>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-primary mb-2 uppercase">WELCOME TO</h1>
                <div className="mb-6">
                    <RotatingText texts={["Hackverse 2025"]} className="text-primary text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-lg" />
                </div>
                <div className="flex gap-4 mb-12">
                    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">{timeLeft.days}</div>
                        <div className="text-sm text-blue-900">Days</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">{timeLeft.hours}</div>
                        <div className="text-sm text-blue-900">Hours</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</div>
                        <div className="text-sm text-blue-900">Minutes</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</div>
                        <div className="text-sm text-blue-900">Seconds</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownSection; 