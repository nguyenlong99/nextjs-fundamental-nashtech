import ENDPOINT from '@/lib/enums/endpoint';
import { ICreatePost } from '@/lib/interfaces';

const PostClientService = {
  async getPosts() {
    const res = await fetch(`${ENDPOINT.posts}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  },
  async getPostById(postId: string) {
    const res = await fetch(`${ENDPOINT.posts}/${postId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  },
  async createPost(data: ICreatePost) {
    const res = await fetch(`${ENDPOINT.posts}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error('Failed to post data');
    }
    return res.json();
  },
};
export default PostClientService;
