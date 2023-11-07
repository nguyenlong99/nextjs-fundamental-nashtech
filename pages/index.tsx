import type { GetServerSideProps, NextPage } from 'next';
import Layout from '../lib/components/layout';
import Link from 'next/link';
import { getList } from '../lib/services/post.service';

type Post = {
  id: string;
  title: string;
  subTitle: string;
};

interface HomePageProps {
  postList: Post[];
}
const Home: NextPage<HomePageProps> = ({ postList }) => {
  const backgroundImage = 'img/home-bg.jpg';
  const title = 'Clean Blog';
  const subTitle = 'A Clean Blog Theme by Start Bootstrap';
  return (
    <Layout backgroundImage={backgroundImage} title={title} subTitle={subTitle} post={false}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            {postList.map((post: any) => {
              return (
                <div className='post-preview' key={post.id}>
                  <Link href={'post/' + post.id}>
                    <h2 className='post-title'>{post.title}</h2>
                    <h3 className='post-subtitle'>{post.subTitle}</h3>
                  </Link>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const postList: Post[] = await getList();
  return {
    props: {
      postList,
    },
  };
};
export default Home;
