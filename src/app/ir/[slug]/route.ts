import { NextRequest, NextResponse } from "next/server";

const LINKEDIN_URL = "https://www.linkedin.com/in/lucasvelasquezvilla";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Minimal click tracking: visible in Vercel's function logs.
  // Swap for a persistent counter (Vercel KV or an external sheet) when real
  // volume makes it worth it — this is enough to see which project resonates.
  console.log(`[cta-click] project=${slug} ts=${new Date().toISOString()}`);
  return NextResponse.redirect(LINKEDIN_URL, { status: 307 });
}
