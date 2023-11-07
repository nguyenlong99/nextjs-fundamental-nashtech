import clientPromise from '@/lib/database/mongodb';
import { ObjectId } from 'mongodb';
const PostServerService = {
  async getPosts() {
    const client = await clientPromise;
    const db = client.db('nextjs-mongo');

    const posts = await db.collection('posts').find({}).sort({ metacritic: -1 }).toArray();

    return posts;
  },
  async getPostById(id: string) {
    const client = await clientPromise;
    const db = client.db('nextjs-mongo');
    const post = await db
      .collection('posts')
      .find({ _id: new ObjectId(id) })
      .toArray();

    return post[0];
  },
};
export default PostServerService;
