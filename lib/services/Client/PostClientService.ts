import ENDPOINT from '@/lib/enums/endpoint';

const PostClientService = {
  async getPosts() {
    const res = await fetch(`${ENDPOINT.host}/api/posts`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  },
  async getPostById(postId: string) {
    const res = await fetch(`${ENDPOINT.host}/api/posts/${postId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  },
};
export default PostClientService;
