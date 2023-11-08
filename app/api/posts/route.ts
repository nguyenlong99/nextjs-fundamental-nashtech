import PostServerService from '@/lib/services/Server/PostServerService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const posts = await PostServerService.getPosts();
    return NextResponse.json(posts);
  } catch (e: any) {
    console.error(e);
    if (e.name === 'BSONError')
      return NextResponse.json({ message: 'Invalid id' }, { status: 404 });
    NextResponse.json({ message: 'System error' }, { status: 500 });
  }
}
