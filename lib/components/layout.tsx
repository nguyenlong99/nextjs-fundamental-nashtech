import { NextPage } from 'next';

import Header from './header';
import Footer from './footer';
import NavBar from './navbar';

type MyProps = {
  children: any;
  backgroundImage: string;
  title: string;
  subTitle: string;
  post: boolean;
};

const Layout: NextPage<MyProps> = ({
  children,
  backgroundImage,
  title,
  subTitle,
  post,
}) => {
  return (
    <div>
      <NavBar />
      <Header
        backgroundImage={backgroundImage}
        title={title}
        subTitle={subTitle}
        post={post}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
