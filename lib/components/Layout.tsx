import Header from './Header';
import Footer from './Footer';
import NavBar from './Navbar';

type Props = {
  children: any;
  backgroundImage: string;
  title: string;
  subTitle: string;
  post: boolean;
};

const Layout = ({ children, backgroundImage, title, subTitle, post }: Props) => {
  return (
    <>
      <Header backgroundImage={backgroundImage} title={title} subTitle={subTitle} post={post} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
