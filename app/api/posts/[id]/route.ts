import PostServerService from '@/lib/services/Server/PostServerService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const post = await PostServerService.getPostById(id);
    return NextResponse.json(post);
  } catch (e: any) {
    console.error(e);
    if (e.name === 'BSONError')
      return NextResponse.json({ message: 'Invalid id' }, { status: 404 });
    NextResponse.json({ message: 'System error' }, { status: 500 });
  }
}
