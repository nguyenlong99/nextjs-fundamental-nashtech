interface IPost {
  _id: string;
  backgroundImage: string;
  title: string;
  subTitle: string;
  content: string;
}

interface ICreatePost extends Omit<IPost, '_id'> {}

export default IPost;
export type { ICreatePost };
