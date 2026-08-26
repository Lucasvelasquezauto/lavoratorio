"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Signature element for the hero: a lab "circuit" that draws itself in,
 * connecting four nodes labeled with the site's four project categories.
 * This is the one deliberately bold moment on the page — everything else
 * stays quiet by comparison.
 */
export default function SignatureCircuit() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>(".circuit-line");
    const nodes = svg.querySelectorAll<SVGCircleElement>(".circuit-node");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(paths, { strokeDashoffset: 0 });
      gsap.set(nodes, { scale: 1, transformOrigin: "center" });
      return;
    }

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1.6,
      stagger: 0.25,
      ease: "power2.inOut",
    }).fromTo(
      nodes,
      { scale: 0, transformOrigin: "center" },
      { scale: 1, duration: 0.5, stagger: 0.2, ease: "back.out(3)" },
      "-=1.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 320"
      className="w-full h-auto max-w-xl"
      fill="none"
      aria-hidden="true"
    >
      <path className="circuit-line" d="M60 260 L60 160 L180 160" stroke="var(--lab-amber)" strokeWidth="2" />
      <path className="circuit-line" d="M180 160 L300 160 L300 60" stroke="var(--lab-cyan)" strokeWidth="2" />
      <path className="circuit-line" d="M300 160 L420 160 L420 240" stroke="var(--lab-amber)" strokeWidth="2" />
      <path className="circuit-line" d="M420 160 L540 160 L540 100" stroke="var(--lab-cyan)" strokeWidth="2" />

      <circle className="circuit-node" cx="60" cy="260" r="6" fill="var(--lab-amber)" />
      <circle className="circuit-node" cx="180" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node" cx="300" cy="60" r="6" fill="var(--lab-cyan)" />
      <circle className="circuit-node" cx="300" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node" cx="420" cy="240" r="6" fill="var(--lab-amber)" />
      <circle className="circuit-node" cx="420" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node" cx="540" cy="100" r="6" fill="var(--lab-cyan)" />
    </svg>
  );
}
