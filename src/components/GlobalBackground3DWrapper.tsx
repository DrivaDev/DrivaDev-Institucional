"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Only import Three.js after browser is idle — prevents download during LCP window
const GlobalBackground3D = dynamic(() => import("./GlobalBackground3D"), {
  ssr: false,
});

export default function GlobalBackground3DWrapper() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setReady(true), 200);
      return () => clearTimeout(id);
    }
  }, []);

  if (!ready) return null;
  return <GlobalBackground3D />;
}
