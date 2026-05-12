"use client";

import dynamic from "next/dynamic";

const GlobalBackground3D = dynamic(() => import("./GlobalBackground3D"), {
  ssr: false,
});

export default function GlobalBackground3DWrapper() {
  return <GlobalBackground3D />;
}
