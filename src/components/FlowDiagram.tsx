"use client";

import { useLang, Lang } from "@/lib/i18n";
import { FlowStep } from "@/data/projects";

export default function FlowDiagram({ steps, color = "amber" }: { steps: FlowStep[]; color?: "amber" | "cyan" }) {
  const { lang } = useLang();
  const accent = color === "amber" ? "var(--lab-amber)" : "var(--lab-cyan)";

  return (
    <div className="relative">
      <div className="hairline rounded-lg bg-[var(--lab-bg-2)] p-6 overflow-x-auto flow-scroll">
        <div className="flex items-stretch gap-0 w-max">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center text-center w-28 sm:w-32">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs mb-3 shrink-0"
                  style={{ border: `2px solid ${accent}`, color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs sm:text-sm leading-snug text-[var(--lab-ink)]">{step[lang as Lang]}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="h-px w-6 sm:w-10 mb-9 shrink-0"
                  style={{ background: `linear-gradient(90deg, ${accent}, var(--lab-line))` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Edge fade hints at more content when the diagram overflows its container */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-10 rounded-r-lg"
        style={{ background: "linear-gradient(90deg, transparent, var(--lab-bg-2))" }}
      />
    </div>
  );
}
