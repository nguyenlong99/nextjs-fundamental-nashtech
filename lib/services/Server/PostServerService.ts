import dbConnect from '@/lib/database/mongodb';
import { ICreatePost } from '@/lib/interfaces';
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
  async createPost(data: ICreatePost) {
    await dbConnect();

    const createdPost = await PostModel.create(data);

    return createdPost;
  },
};
export default PostServerService;
