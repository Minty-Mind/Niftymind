"use client";

import { useEffect, useState } from "react";

export default function TechBackground() {
    const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        setParticles(
            [...Array(30)].map(() => ({ // Reduced count for mobile performance
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 6}s`,
                duration: `${4 + Math.random() * 4}s`
            }))
        );
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            {/* Particle stars */}
            <div className="absolute inset-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-brand-primary rounded-full opacity-30"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration
                        }}
                    />
                ))}
            </div>

            {/* Tech grid */}
            <div className="absolute inset-0 tech-grid opacity-30" />

            {/* Scan line effect */}
            <div className="scan-line" />

            {/* Ambient green glow orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)',
                        top: '-10%',
                        left: '-10%',
                        filter: 'blur(80px)'
                    }}
                />
                <div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(0,255,136,0.2) 0%, transparent 70%)',
                        bottom: '-10%',
                        right: '-10%',
                        filter: 'blur(100px)'
                    }}
                />
            </div>
        </div>
    );
}
