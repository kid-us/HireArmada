/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 }, // Manila
    { location: [19.076, 72.8777], size: 0.1 }, // Mumbai
    { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
    { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [34.6937, 135.5022], size: 0.05 }, // Osaka
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const baseRotation = useRef({ phi: 0, theta: 0.3 });
  const autoRotate = useRef(true);
  let phi = baseRotation.current.phi;
  let theta = baseRotation.current.theta;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 });

  const updatePointerInteraction = (value: { x: number; y: number } | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
    if (value) {
      pointerStart.current = value;
      autoRotate.current = false; // Pause auto-rotation when dragging
    } else {
      // On pointer up, persist the drag delta to the base rotation
      baseRotation.current.phi += dragDelta.x / 200;
      baseRotation.current.theta += dragDelta.y / 200;
      // Clamp theta
      baseRotation.current.theta = Math.max(
        -Math.PI / 2 + 0.01,
        Math.min(Math.PI / 2 - 0.01, baseRotation.current.theta)
      );
      setDragDelta({ x: 0, y: 0 });
      pointerStart.current = null;
      autoRotate.current = true; // Resume auto-rotation after dragging
    }
  };

  const updateMovement = (clientX: number, clientY: number) => {
    if (pointerInteracting.current !== null && pointerStart.current !== null) {
      const deltaX = clientX - pointerStart.current.x;
      const deltaY = clientY - pointerStart.current.y;
      setDragDelta({ x: deltaX, y: deltaY });
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      // Calculate phi/theta based on base + drag delta
      phi = baseRotation.current.phi + dragDelta.x / 200;
      theta = baseRotation.current.theta + dragDelta.y / 200;
      // Clamp theta
      theta = Math.max(
        -Math.PI / 2 + 0.01,
        Math.min(Math.PI / 2 - 0.01, theta)
      );
      if (autoRotate.current && !pointerInteracting.current) {
        baseRotation.current.phi += 0.005;
        phi += 0.005;
      }
      state.phi = phi;
      state.theta = theta;
      state.width = width * 2;
      state.height = width * 2;
    },
    [dragDelta]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          updatePointerInteraction({ x: e.clientX, y: e.clientY });
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => {
          if (pointerInteracting.current) {
            updateMovement(e.clientX, e.clientY);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current) {
            updateMovement(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
      />
    </div>
  );
}
