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
  { cat: "automatizacion", cx: 60, cy: 260, color: "amber", labelDy: 34 },
  { cat: "analisis", cx: 300, cy: 60, color: "cyan", labelDy: -24 },
  { cat: "agentes", cx: 420, cy: 240, color: "amber", labelDy: 34 },
  { cat: "exploracion", cx: 540, cy: 100, color: "cyan", labelDy: -24 },
];

export default function SignatureCircuit() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>(".circuit-line");
    // The plain connector dots (which just pop in via a CSS transform) and
    // the interactive category nodes (which grow via their `r` attribute,
    // see below) are animated separately since they use different
    // mechanics.
    const dots = svg.querySelectorAll<SVGCircleElement>(".circuit-node-dot");
    const catNodes = svg.querySelectorAll<SVGCircleElement>(".circuit-node-cat");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
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
    })
      .fromTo(
        dots,
        { scale: 0, transformOrigin: "center" },
        {
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(3)",
          clearProps: "transform,transformOrigin",
        },
        "-=1.2"
      )
      // The category nodes grow their radius (`r`) directly instead of using
      // a CSS transform: scaling an SVG circle via `transform: scale()`
      // needs a correct transform-origin, and browsers disagree on how a
      // pixel-based transform-origin maps onto an SVG element's own
      // coordinate space — in practice it kept scaling from the wrong point
      // and flinging the node away from its real position. Animating `r`
      // has no such ambiguity: growth is centered on cx/cy by definition.
      .fromTo(
        catNodes,
        { attr: { r: 0 } },
        {
          attr: { r: 6 },
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(3)",
        },
        "<"
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

      <circle className="circuit-node-dot" cx="180" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node-dot" cx="300" cy="160" r="5" fill="var(--lab-ink)" />
      <circle className="circuit-node-dot" cx="420" cy="160" r="5" fill="var(--lab-ink)" />

      {categoryNodes.map((node) => (
        <a
          key={node.cat}
          href={`#${node.cat}`}
          className="group cursor-pointer"
          aria-label={categoryLabels[node.cat][lang]}
        >
          <title>{categoryLabels[node.cat][lang]}</title>
          {/* generous invisible hit area for easier hover/tap */}
          <circle cx={node.cx} cy={node.cy} r="22" fill="transparent" />
          <circle
            className="circuit-node-cat transition-[r] duration-200 ease-out group-hover:[r:14px] group-focus-visible:[r:14px]"
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill={`var(--lab-${node.color})`}
          />
          <text
            x={node.cx}
            y={node.cy + node.labelDy}
            textAnchor="middle"
            className="font-mono uppercase tracking-wide pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            fontSize="18"
            fontWeight="600"
            fill="var(--lab-ink)"
            style={{
              paintOrder: "stroke",
              stroke: "var(--lab-bg)",
              strokeWidth: "5px",
              strokeLinejoin: "round",
            }}
          >
            {node.cat}
          </text>
        </a>
      ))}
    </svg>
  );
}
