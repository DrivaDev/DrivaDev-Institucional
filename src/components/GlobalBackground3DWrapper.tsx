"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Three.js loaded only after window.load + buffer to ensure we're past TTI.
// This prevents the Three.js parse task (200-500ms) from hitting TBT.
const GlobalBackground3D = dynamic(() => import("./GlobalBackground3D"), {
  ssr: false,
});

export default function GlobalBackground3DWrapper() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = () => {
      // 500ms after load gives buffer past TTI for static Next.js pages
      timeoutId = setTimeout(() => setReady(true), 500);
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", schedule);
    };
  }, []);

  if (!ready) return null;
  return <GlobalBackground3D />;
}
