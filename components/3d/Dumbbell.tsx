"use client";

import { useRef, useLayoutEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { Group } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export function Dumbbell(props: any) {
    const ref = useRef<Group>(null);
    const { viewport } = useThree();
    const [isGold, setIsGold] = useState(false);

    // Memoize Materials
    const chromeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 1,
        roughness: 0.15,
        envMapIntensity: 1,
    }), []);

    const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#FBBF24",
        metalness: 1,
        roughness: 0.2,
        envMapIntensity: 1.2,
    }), []);

    const activeMaterial = isGold ? goldMaterial : chromeMaterial;

    // Responsive Scale
    const isMobile = viewport.width < 5;
    const initialScale = isMobile ? 1.5 : 2;

    useLayoutEffect(() => {
        const group = ref.current;
        if (!group) return;

        const ctx = gsap.context(() => {
            // GSAP Timeline linked to scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                },
            });

            // 1. Move to Center for "The Space" section
            tl.to(group.position, {
                x: 0,
                y: -0.5,
                z: -1,
                duration: 2,
                ease: "power2.inOut"
            })
                .to(group.rotation, {
                    x: Math.PI / 4,
                    z: Math.PI / 2,
                    duration: 2,
                }, "<");

            // 2. Move to Left for "Training Zones" (Gold transition starts)
            tl.to(group.position, {
                x: isMobile ? -1 : -3.5,
                y: 0, // Keep visible
                z: 0,
                duration: 2,
                ease: "power1.inOut",
                onStart: () => setIsGold(true),
                onReverseComplete: () => setIsGold(false),
            })
                .to(group.rotation, {
                    y: Math.PI,
                    duration: 2
                }, "<");

            // 3. Move to Right for "Membership/Amenities"
            tl.to(group.position, {
                x: isMobile ? 1 : 3.5,
                y: -1,
                z: -1,
                duration: 2,
                ease: "power1.inOut"
            })
                .to(group.rotation, {
                    x: Math.PI,
                    y: Math.PI * 1.5,
                    duration: 2
                }, "<");

            // 4. Move to Left for "Testimonials"
            tl.to(group.position, {
                x: isMobile ? -1 : -3,
                y: 0.5,
                z: 0,
                duration: 2,
                ease: "power1.inOut"
            })
                .to(group.rotation, {
                    x: Math.PI * 1.5,
                    y: Math.PI / 2,
                    duration: 2
                }, "<");

            // 5. Move to Center/Right for "Founders Offer"
            tl.to(group.position, {
                x: isMobile ? 0 : 2,
                y: -0.5,
                z: 1,
                duration: 2,
                ease: "power2.out"
            })
                .to(group.rotation, {
                    x: Math.PI * 2,
                    y: Math.PI * 2,
                    duration: 2
                }, "<");

        });

        return () => ctx.revert();
    }, [viewport.width, isMobile]);

    return (
        <group ref={ref} {...props} dispose={null} position={[1.5, 0, 0]} rotation={[0.2, 0.5, 0]} scale={[initialScale, initialScale, initialScale]}>
            {/* Handle */}
            <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.08, 0.08, 1.2, 32]} />
                <primitive object={activeMaterial} attach="material" />
            </mesh>

            {/* Left Weight */}
            <mesh castShadow receiveShadow position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
                <primitive object={activeMaterial} attach="material" />
            </mesh>

            {/* Right Weight */}
            <mesh castShadow receiveShadow position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
                <primitive object={activeMaterial} attach="material" />
            </mesh>

            {/* Inner Weights (Decoration) */}
            <mesh castShadow receiveShadow position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.32, 0.32, 0.1, 32]} />
                <primitive object={activeMaterial} attach="material" />
            </mesh>
            <mesh castShadow receiveShadow position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.32, 0.32, 0.1, 32]} />
                <primitive object={activeMaterial} attach="material" />
            </mesh>
        </group>
    );
}
