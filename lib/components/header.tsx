import { NextPage } from 'next';
import Head from 'next/head';

type HeaderProps = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  meta?: string;
  post: boolean;
};

const Header: NextPage<HeaderProps> = ({
  backgroundImage,
  title,
  subTitle,
  post,
}) => {
  return (
    <header
      className="intro-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {!post ? (
              <div className="site-heading">
                <h1>{title}</h1>
                <hr className="small" />
                <span className="subheading">{subTitle}</span>
              </div>
            ) : (
              <div className="post-heading">
                <h1>{title}</h1>
                <h2 className="subheading">{subTitle}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
