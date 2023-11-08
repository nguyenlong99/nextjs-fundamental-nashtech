import { NextPage } from 'next';
import Link from 'next/link';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/dist/server';

const NavBar: NextPage = () => {
  return (
    <nav className='navbar navbar-default navbar-custom navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header page-scroll'>
          <button
            type='button'
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            Menu <i className='fa fa-bars'></i>
          </button>
          <Link className='navbar-brand' href='/'>
            Start Bootstrap
          </Link>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/post/1'>Sample Post</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            {/* <li>
              <LoginLink>Sign in</LoginLink>
            </li>
            <li>
              <RegisterLink>Sign up</RegisterLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
