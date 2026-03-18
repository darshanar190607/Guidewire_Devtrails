import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  return NextResponse.json({ success: true, risk_score: 0.15 });
}
