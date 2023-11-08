import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({ hello: 'world' });
  } catch (e: any) {
    console.error(e);
  }
}
