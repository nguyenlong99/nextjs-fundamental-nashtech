import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { kindeAuth: string } }) {
  try {
    const { kindeAuth } = params;
    const endpoint = kindeAuth.toString();
    return handleAuth(req, endpoint);
  } catch (e: any) {
    console.error(e);
    NextResponse.json({ message: 'System error' }, { status: 500 });
  }
}
