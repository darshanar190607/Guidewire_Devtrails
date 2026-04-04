"use client";
import React, { useEffect, useState } from "react";
import App from "../../App";

export default function CatchAllPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch
  return <App />;
}
