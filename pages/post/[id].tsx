import { GetServerSideProps, NextPage } from 'next';
import Layout from '../../lib/components/layout';
import { useRouter } from 'next/router';
import PostClientService from '@/lib/services/Client/PostClientService';

type PostDetail = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  content: string;
};

interface DetailPageProps {
  postDetail: PostDetail;
}
const Post: NextPage<DetailPageProps> = ({ postDetail }) => {
  const router = useRouter();
  if (!postDetail) {
    postDetail = {
      backgroundImage: '/img/404.jpg',
      title: 'not found',
      subTitle: 'not found',
      content: 'there is no data to show',
    };
  }
  return (
    <Layout
      backgroundImage={postDetail.backgroundImage}
      title={postDetail.title}
      subTitle={postDetail.subTitle}
      post={true}
    >
      <article>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'
              dangerouslySetInnerHTML={{ __html: postDetail.content }}
            ></div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<DetailPageProps> = async ({ params }) => {
  const postId = params?.id as string;
  const postDetail = await PostClientService.getPostById(postId);
  if (postDetail) return { props: { postDetail } };
  return { props: { postDetail: null } };
};

export default Post;
