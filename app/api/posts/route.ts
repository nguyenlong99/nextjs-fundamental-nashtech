import { ICreatePost } from '@/lib/interfaces';
import PostServerService from '@/lib/services/Server/PostServerService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
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

export async function POST(req: NextRequest) {
  try {
    const reqBody: ICreatePost = await req.json();
    const createdPost = await PostServerService.createPost(reqBody);
    return NextResponse.json(createdPost);
  } catch (e: any) {
    console.error(JSON.stringify(e, null, 4));

    if (e.name === 'ValidationError')
      return NextResponse.json({ message: e?.errors?.title?.message }, { status: 400 });

    NextResponse.json({ message: 'System error' }, { status: 500 });
  }
}
