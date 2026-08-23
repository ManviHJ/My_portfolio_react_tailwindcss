import { useState, useEffect } from "react";

const CloudSVG = ({ className, style }) => (
    <svg viewBox="0 0 200 100" className={className} style={style} fill="white">
        <ellipse cx="60" cy="65" rx="45" ry="28" />
        <ellipse cx="100" cy="50" rx="55" ry="35" />
        <ellipse cx="145" cy="65" rx="40" ry="25" />
        <ellipse cx="90" cy="75" rx="60" ry="22" />
    </svg>
);

export const CloudBackground = () => {
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        generateClouds();
    }, []);

    const generateClouds = () => {
        const numberOfClouds = 10;
        const newClouds = [];
        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                width: Math.random() * 120 + 100,
                x: Math.random() * 85,
                y: Math.random() * 85,
                duration: Math.random() * 60 + 60,
                delay: Math.random() * -60,
                opacity: Math.random() * 0.35 + 0.45,
            });
        }
        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {clouds.map((cloud) => (
                <CloudSVG
                    key={cloud.id}
                    className="absolute animate-drift"
                    style={{
                        width: cloud.width + "px",
                        left: cloud.x + "px",
                        top: cloud.y + "%",
                        opacity: cloud.opacity,
                        animationDuration: cloud.duration + "s",
                        animationDelay: cloud.delay + "s",
                    }}
                />
            ))}
        </div>
    );
};