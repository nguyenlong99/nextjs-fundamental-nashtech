import dbConnect from '@/lib/database/mongodb';
import PostModel from '@/lib/models/Post';

const PostServerService = {
  async getPosts() {
    await dbConnect();
    const posts = await PostModel.find({});

    return posts;
  },
  async getPostById(id: string) {
    await dbConnect();
    const post = await PostModel.findById(id);

    return post;
  },
};
export default PostServerService;
