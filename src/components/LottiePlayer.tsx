"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottiePlayerProps {
    src: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

export default function LottiePlayer({
    src,
    className = "",
    loop = true,
    autoplay = true,
}: LottiePlayerProps) {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Failed to load Lottie animation:", err));
    }, [src]);

    if (!animationData) {
        return (
            <div className={`flex items-center justify-center ${className}`}>
                <div className="w-8 h-8 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            className={className}
        />
    );
}
