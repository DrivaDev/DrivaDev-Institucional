"use client";

import { useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  IcosahedronGeometry,
  MeshBasicMaterial,
  MeshPhongMaterial,
  Mesh,
  AmbientLight,
  PointLight,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  DoubleSide,
  Clock,
} from "three";

export default function GlobalBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    const scene = new Scene();

    const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(isMobile ? 0 : -1.4, 0, 5.5);
    camera.lookAt(0, 0, 0);

    const renderer = new WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Wireframe icosahedron
    const geo = new IcosahedronGeometry(2, 2);
    const mat = new MeshBasicMaterial({ color: 0xea580c, wireframe: true, transparent: true, opacity: 0.42 });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    // Inner fill
    const innerGeo = new IcosahedronGeometry(1.65, 1);
    const innerMat = new MeshPhongMaterial({ color: 0xfed7aa, transparent: true, opacity: 0.055, side: DoubleSide });
    const innerMesh = new Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Lights
    scene.add(new AmbientLight(0xffffff, 0.4));
    const pLight = new PointLight(0xea580c, 3, 15);
    pLight.position.set(4, 4, 4);
    scene.add(pLight);

    // Orbiting particles — fewer on mobile
    const COUNT = isMobile ? 80 : 200;
    const pPos = new Float32Array(COUNT * 3);
    const pAngles = new Float32Array(COUNT);
    const pSpeeds = new Float32Array(COUNT);
    const pRadii = new Float32Array(COUNT);
    const pInc = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      pAngles[i] = Math.random() * Math.PI * 2;
      pInc[i] = Math.acos(Math.random() * 2 - 1);
      pRadii[i] = 3 + Math.random() * 2.5;
      pSpeeds[i] = 0.0006 + Math.random() * 0.002;
      const r = pRadii[i], t = pAngles[i], p = pInc[i];
      pPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      pPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pPos[i * 3 + 2] = r * Math.cos(p);
    }

    const pGeo = new BufferGeometry();
    pGeo.setAttribute("position", new BufferAttribute(pPos, 3));
    const pMat = new PointsMaterial({ color: 0x9a3412, size: 0.055, transparent: true, opacity: 0.8, sizeAttenuation: true });
    const particles = new Points(pGeo, pMat);
    scene.add(particles);

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const clock = new Clock();
    let animId: number;
    let lastFrameTime = 0;
    const frameInterval = isMobile ? 1000 / 30 : 0;

    const animate = (timestamp: number = 0) => {
      animId = requestAnimationFrame(animate);

      if (frameInterval > 0) {
        const elapsed = timestamp - lastFrameTime;
        if (elapsed < frameInterval) return;
        lastFrameTime = timestamp - (elapsed % frameInterval);
      }

      const t = clock.getElapsedTime();
      tx += (mx - tx) * 0.04;
      ty += (my - ty) * 0.04;

      mesh.rotation.x = t * 0.12 + ty * 0.35;
      mesh.rotation.y = t * 0.16 + tx * 0.35;
      innerMesh.rotation.x = -t * 0.08;
      innerMesh.rotation.y = t * 0.2;

      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pAngles[i] += pSpeeds[i];
        const r = pRadii[i], theta = pAngles[i], phi = pInc[i];
        pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
      }
      pGeo.attributes.position.needsUpdate = true;

      particles.rotation.y = tx * 0.2;
      particles.rotation.x = ty * 0.2;

      renderer.render(scene, camera);
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
