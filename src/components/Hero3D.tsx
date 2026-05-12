"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Wireframe icosahedron
    const geo = new THREE.IcosahedronGeometry(1.6, 2);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xea580c,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Inner subtle fill
    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0xfed7aa,
      transparent: true,
      opacity: 0.07,
      side: THREE.DoubleSide,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pointLight = new THREE.PointLight(0xea580c, 3, 12);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Particles
    const COUNT = 180;
    const pPos = new Float32Array(COUNT * 3);
    const pAngles = new Float32Array(COUNT);
    const pSpeeds = new Float32Array(COUNT);
    const pRadii = new Float32Array(COUNT);
    const pInclinations = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      pAngles[i] = Math.random() * Math.PI * 2;
      pInclinations[i] = Math.acos(Math.random() * 2 - 1);
      pRadii[i] = 2.6 + Math.random() * 1.8;
      pSpeeds[i] = 0.0008 + Math.random() * 0.0025;
      const r = pRadii[i];
      const t = pAngles[i];
      const p = pInclinations[i];
      pPos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pPos[i * 3 + 2] = r * Math.cos(p);
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x9a3412,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse tracking
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;

    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      tx += (mx - tx) * 0.04;
      ty += (my - ty) * 0.04;

      mesh.rotation.x = t * 0.14 + ty * 0.4;
      mesh.rotation.y = t * 0.18 + tx * 0.4;
      innerMesh.rotation.x = -t * 0.09;
      innerMesh.rotation.y = t * 0.22;

      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pAngles[i] += pSpeeds[i];
        const r = pRadii[i];
        const theta = pAngles[i];
        const phi = pInclinations[i];
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);
      }
      pGeo.attributes.position.needsUpdate = true;

      particles.rotation.y = tx * 0.25;
      particles.rotation.x = ty * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
  );
}
