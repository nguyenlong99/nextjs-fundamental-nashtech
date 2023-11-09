import Link from 'next/link';
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';

interface PermisstionDetail {
  orgCode: string;
  isGranted: boolean;
}

const NavBar = () => {
  const { isAuthenticated, getUser, getPermission, getPermissions } = getKindeServerSession();

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
              <Link href='/contact'>Contact</Link>
            </li>
            {(async () => {
              const user = await getUser();
              const createPermission: PermisstionDetail = await getPermission(
                'create-items-permission'
              );

              return (await isAuthenticated()) ? (
                <>
                  <li>
                    <Link href='#'>
                      Welcome, {user?.given_name} {user?.family_name}
                    </Link>
                  </li>

                  {createPermission.isGranted ? (
                    <li>
                      <Link href='/post/create'>Create post</Link>
                    </li>
                  ) : null}
                  <li>
                    <LogoutLink className='text-black'>Log out</LogoutLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <LoginLink>Sign in</LoginLink>
                  </li>
                  <li>
                    <RegisterLink>Sign up</RegisterLink>
                  </li>
                </>
              );
            })()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
