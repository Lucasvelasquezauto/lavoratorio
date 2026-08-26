"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n";
import { categoryLabels, Category } from "@/data/projects";

/**
 * Signature element for the hero: a lab "circuit" that draws itself in,
 * connecting four nodes labeled with the site's four project categories.
 * This is the one deliberately bold moment on the page — everything else
 * stays quiet by comparison. The four large nodes are interactive: they
 * name their category on hover/focus and jump to that section on click.
 */

interface CategoryNode {
  cat: Category;
  cx: number;
  cy: number;
  color: "amber" | "cyan";
  labelDy: number;
}

const categoryNodes: CategoryNode[] = [
  { cat: "automatizacion", cx: 60, cy: 260, color: "amber", labelDy: 24 },
  { cat: "analisis", cx: 300, cy: 60, color: "cyan", labelDy: -16 },
  { cat: "agentes", cx: 420, cy: 240, color: "amber", labelDy: 24 },
  { cat: "exploracion", cx: 540, cy: 100, color: "cyan", labelDy: -16 },
];

export default function SignatureCircuit() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>(".circuit-line");
    const nodes = svg.querySelectorAll<SVGCircleElement>(".circuit-node");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      // Nodes are already at their resting scale by default; only skip the
      // line-drawing animation so hover/focus scaling (CSS-driven) stays
      // free of any leftover inline transform from GSAP.
      gsap.set(paths, { strokeDashoffset: 0 });
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
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(3)",
        // Clear GSAP's inline transform once the entrance finishes so the
        // CSS hover/focus scale on the category nodes isn't blocked by it.
        clearProps: "transform,transformOrigin",
      },
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
      className="w-full h-auto max-w-xl overflow-visible"
      fill="none"
    >
      <path className="circuit-line" d="M60 260 L60 160 L180 160" stroke="var(--lab-amber)" strokeWidth="2" />
      <path className="circuit-line" d="M180 160 L300 160 L300 60" stroke="var(--lab-cyan)" strokeWidth="2" />
      <path className="circuit-line" d="M300 160 L420 160 L420 240" stroke="var(--lab-amber)" strokeWidth="2" />
      <path className="circuit-line" d="M420 160 L540 160 L540 100" stroke="var(--lab-cyan)" strokeWidth="2" />

      <circle className="circuit-node" cx="180" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node" cx="300" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node" cx="420" cy="160" r="5" fill="var(--lab-ink)" />

      {categoryNodes.map((node) => (
        <a
          key={node.cat}
          href={`#${node.cat}`}
          className="group cursor-pointer"
          aria-label={categoryLabels[node.cat][lang]}
        >
          <title>{categoryLabels[node.cat][lang]}</title>
          {/* generous invisible hit area for easier hover/tap */}
          <circle cx={node.cx} cy={node.cy} r="18" fill="transparent" />
          <circle
            className="circuit-node transition-transform duration-200 ease-out group-hover:scale-150 group-focus-visible:scale-150"
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill={`var(--lab-${node.color})`}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <text
            x={node.cx}
            y={node.cy + node.labelDy}
            textAnchor="middle"
            className="font-mono uppercase tracking-wide pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            fontSize="10"
            fill="var(--lab-muted)"
          >
            {node.cat}
          </text>
        </a>
      ))}
    </svg>
  );
}
