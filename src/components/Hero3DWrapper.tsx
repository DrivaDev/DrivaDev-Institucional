"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-acento/20 to-transparent" />,
});

export default function Hero3DWrapper() {
  return <Hero3D />;
}
