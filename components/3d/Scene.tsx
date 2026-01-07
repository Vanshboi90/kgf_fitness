"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Dumbbell } from "./Dumbbell";
import { Suspense } from "react";

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <Canvas
                gl={{ alpha: true, antialias: true }}
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 1.5]} // Optimization: clamp pixel ratio
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -5]} intensity={1} color="#2DD4BF" />

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Dumbbell />
                    </Float>
                </Suspense>
            </Canvas>
        </div>
    );
}
