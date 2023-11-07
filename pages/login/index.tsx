import Layout from '@/lib/components/layout';
import { NextPage } from 'next';

const Login: NextPage = () => {
  const backgroundImage = '/img/contact-bg.jpg';
  const title = 'Contact Me';
  const subTitle = '';

  return (
    <Layout backgroundImage={backgroundImage} title={title} subTitle={subTitle} post={false}>
      <div>hello</div>
    </Layout>
  );
};

export default Login;
