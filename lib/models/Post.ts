import mongoose from 'mongoose';

export interface IPost extends mongoose.Document {
  title: string;
  subTitle: string;
  backgroundImage: string;
  content: string;
}

const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post.'],
  },
  subTitle: {
    type: String,
    required: [true, 'Please provide a sub title for this post.'],
  },
  backgroundImage: {
    type: String,
    required: [true, 'Please provide a background image url for this post.'],
  },
  content: {
    type: String,
    required: [true, 'Please provide a content for this post.'],
  },
});

export default mongoose.models.post || mongoose.model<IPost>('post', postSchema);
