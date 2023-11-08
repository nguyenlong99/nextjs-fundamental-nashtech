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
    <div>
      <NavBar />
      <Header backgroundImage={backgroundImage} title={title} subTitle={subTitle} post={post} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
