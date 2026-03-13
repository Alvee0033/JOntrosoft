"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const animationCache = new Map<string, unknown>();

interface LottiePlayerProps {
    src: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

interface AnimationState {
    src: string;
    data: unknown;
}

export default function LottiePlayer({
    src,
    className = "",
    loop = true,
    autoplay = true,
}: LottiePlayerProps) {
    const [animationState, setAnimationState] = useState<AnimationState | null>(null);
    const cachedAnimationData = animationCache.get(src) ?? null;
    const animationData = cachedAnimationData ?? (animationState?.src === src ? animationState.data : null);

    useEffect(() => {
        if (animationCache.has(src)) {
            return;
        }

        const controller = new AbortController();

        fetch(src, { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => {
                animationCache.set(src, data);
                setAnimationState({ src, data });
            })
            .catch((err: unknown) => {
                if (err instanceof DOMException && err.name === "AbortError") {
                    return;
                }

                console.error("Failed to load Lottie animation:", err);
            });

        return () => controller.abort();
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
