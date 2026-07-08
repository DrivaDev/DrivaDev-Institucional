"use client";

import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  Color,
  AdditiveBlending,
  Clock,
} from "three";

// Driva Dev "Woven by Light" — particle cloud shaped like the isotipo, orange palette.
// Particles are sampled from /isotipo.svg pixels, repelled by the cursor, and spring
// back to their original position (adapted from 21st.dev woven-light-hero).
export default function GlobalBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Respect reduced-motion and bail on devices without a usable WebGL context
    // instead of letting a failed/lost context crash the whole tab.
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const supportsWebGL = (() => {
      try {
        const c = document.createElement("canvas");
        return !!(c.getContext("webgl2") || c.getContext("webgl"));
      } catch {
        return false;
      }
    })();
    if (!supportsWebGL) return;

    const isMobile = window.innerWidth < 768;

    const scene = new Scene();

    const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(isMobile ? 0 : -1.4, 0, 5.5);
    camera.lookAt(0, 0, 0);

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "low-power",
        failIfMajorPerformanceCaveat: false,
      });
    } catch {
      // No GL context available — leave the page background untouched.
      return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Cap DPR harder: high-DPI desktops multiply fill cost and are the ones crashing.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // If the GPU drops the context, stop the loop cleanly rather than crash the renderer.
    const canvas = renderer.domElement;
    const onContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animId);
    };
    const onContextRestored = () => {
      animate();
    };
    canvas.addEventListener("webglcontextlost", onContextLost as EventListener, false);
    canvas.addEventListener("webglcontextrestored", onContextRestored as EventListener, false);

    // Orange palette for the logo dots — darker range (lightest tones dropped)
    const palette = ["#7c2d12", "#9a3412", "#c2410c", "#ea580c"].map((h) => new Color(h));

    // --- Starfield (space depth behind the logo) ---
    const makeStars = (count: number, spread: number, depth: number, size: number, opacity: number) => {
      const sPos = new Float32Array(count * 3);
      const sCol = new Float32Array(count * 3);
      const starPalette = ["#ea580c", "#f97316", "#fdba74"].map((h) => new Color(h));
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        sPos[i3] = (Math.random() - 0.5) * spread;
        sPos[i3 + 1] = (Math.random() - 0.5) * spread;
        sPos[i3 + 2] = -1 - Math.random() * depth; // behind the logo
        const c = starPalette[(Math.random() * starPalette.length) | 0];
        const b = 0.5 + Math.random() * 0.5; // brightness variation
        sCol[i3] = c.r * b;
        sCol[i3 + 1] = c.g * b;
        sCol[i3 + 2] = c.b * b;
      }
      const g = new BufferGeometry();
      g.setAttribute("position", new BufferAttribute(sPos, 3));
      g.setAttribute("color", new BufferAttribute(sCol, 3));
      const m = new PointsMaterial({
        size,
        vertexColors: true,
        transparent: true,
        opacity,
        blending: AdditiveBlending,
        sizeAttenuation: true,
        depthWrite: false,
      });
      const pts = new Points(g, m);
      scene.add(pts);
      return { pts, g, m };
    };

    const starsFar = makeStars(isMobile ? 220 : 450, 34, 12, 0.05, 0.55);
    const starsNear = makeStars(isMobile ? 100 : 200, 26, 6, 0.08, 0.85);

    // --- Particle state (allocated after the logo is sampled) ---
    let particleCount = 0;
    let positions: Float32Array;
    let originalPositions: Float32Array;
    let velocities: Float32Array;
    let geometry: BufferGeometry | null = null;
    let points: Points | null = null;

    // Cursor in world space (plane z=0)
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const clock = new Clock();
    let animId = 0;
    let lastFrameTime = 0;
    const frameInterval = isMobile ? 1000 / 30 : 0;

    const REPEL_RADIUS = 1.4;
    const REPEL_FORCE = 0.005;
    const RETURN_FORCE = 0.008;
    const DAMPING = 0.94;

    const animate = (timestamp = 0) => {
      animId = requestAnimationFrame(animate);

      if (frameInterval > 0) {
        const elapsed = timestamp - lastFrameTime;
        if (elapsed < frameInterval) return;
        lastFrameTime = timestamp - (elapsed % frameInterval);
      }

      const t = clock.getElapsedTime();
      tx += (mx - tx) * 0.03;
      ty += (my - ty) * 0.03;

      // Starfield: independent, very soft autonomous drift (no cursor coupling)
      starsFar.pts.rotation.y = t * 0.005;
      starsFar.pts.position.x = Math.sin(t * 0.04) * 0.35;
      starsFar.pts.position.y = Math.cos(t * 0.03) * 0.28;
      starsFar.m.opacity = 0.5 + Math.sin(t * 0.6) * 0.12;
      starsNear.pts.rotation.y = t * 0.008;
      starsNear.pts.position.x = Math.sin(t * 0.06 + 1.2) * 0.45;
      starsNear.pts.position.y = Math.cos(t * 0.05 + 2.1) * 0.36;
      starsNear.m.opacity = 0.75 + Math.sin(t * 0.9 + 1.5) * 0.16;

      if (!geometry || !points) {
        renderer.render(scene, camera);
        return;
      }

      // Cursor projected onto the cloud plane (undo the group rotation on x/y is
      // negligible for a gentle sway, so approximate in world units).
      const mouseX = tx * 3.2;
      const mouseY = ty * 2.2;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3, iy = ix + 1, iz = ix + 2;

        // Repulsion in the screen plane
        const dx = positions[ix] - mouseX;
        const dy = positions[iy] - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS && dist > 0.0001) {
          const force = (REPEL_RADIUS - dist) * REPEL_FORCE;
          velocities[ix] += (dx / dist) * force;
          velocities[iy] += (dy / dist) * force;
        }

        // Spring back to origin
        velocities[ix] += (originalPositions[ix] - positions[ix]) * RETURN_FORCE;
        velocities[iy] += (originalPositions[iy] - positions[iy]) * RETURN_FORCE;
        velocities[iz] += (originalPositions[iz] - positions[iz]) * RETURN_FORCE;

        // Damping
        velocities[ix] *= DAMPING;
        velocities[iy] *= DAMPING;
        velocities[iz] *= DAMPING;

        positions[ix] += velocities[ix];
        positions[iy] += velocities[iy];
        positions[iz] += velocities[iz];
      }
      geometry.attributes.position.needsUpdate = true;

      // Gentle sway + subtle cursor tilt — never a full spin (flat logo would vanish edge-on)
      points.rotation.y = Math.sin(t * 0.09) * 0.2 + tx * 0.1;
      points.rotation.x = Math.sin(t * 0.07) * 0.07 + ty * 0.08;

      renderer.render(scene, camera);
    };

    // --- Sample the isotipo into a particle cloud ---
    const img = new Image();
    img.src = "/isotipo.svg";
    img.onload = () => {
      const CANVAS = 220;
      const cv = document.createElement("canvas");
      cv.width = CANVAS;
      cv.height = CANVAS;
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, CANVAS, CANVAS);
      const data = ctx.getImageData(0, 0, CANVAS, CANVAS).data;

      // Collect filled pixels (alpha above threshold)
      const filled: number[] = [];
      for (let py = 0; py < CANVAS; py++) {
        for (let px = 0; px < CANVAS; px++) {
          if (data[(py * CANVAS + px) * 4 + 3] > 40) filled.push(px, py);
        }
      }

      const target = Math.min(isMobile ? 2200 : 3200, filled.length / 2);
      particleCount = target;

      positions = new Float32Array(particleCount * 3);
      originalPositions = new Float32Array(particleCount * 3);
      velocities = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const SCALE = 4.6; // world size of the logo
      for (let i = 0; i < particleCount; i++) {
        // Pick a random filled pixel
        const p = (Math.floor(Math.random() * (filled.length / 2))) * 2;
        const px = filled[p];
        const py = filled[p + 1];

        const x = (px / CANVAS - 0.5) * SCALE;
        const y = -(py / CANVAS - 0.5) * SCALE;
        const z = (Math.random() - 0.5) * 0.35;

        const ix = i * 3;
        positions[ix] = originalPositions[ix] = x;
        positions[ix + 1] = originalPositions[ix + 1] = y;
        positions[ix + 2] = originalPositions[ix + 2] = z;

        const c = palette[(Math.random() * palette.length) | 0];
        colors[ix] = c.r;
        colors[ix + 1] = c.g;
        colors[ix + 2] = c.b;
      }

      geometry = new BufferGeometry();
      geometry.setAttribute("position", new BufferAttribute(positions, 3));
      geometry.setAttribute("color", new BufferAttribute(colors, 3));

      const material = new PointsMaterial({
        size: isMobile ? 0.03 : 0.028,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: AdditiveBlending,
        sizeAttenuation: true,
      });

      points = new Points(geometry, material);
      scene.add(points);
    };

    animate();

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.position.x = window.innerWidth > 768 ? -1.4 : 0;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("webglcontextlost", onContextLost as EventListener);
      canvas.removeEventListener("webglcontextrestored", onContextRestored as EventListener);
      geometry?.dispose();
      (points?.material as PointsMaterial | undefined)?.dispose();
      starsFar.g.dispose();
      starsFar.m.dispose();
      starsNear.g.dispose();
      starsNear.m.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
