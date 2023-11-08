import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../public/css/clean-blog.min.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <meta charSet='utf-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content='' />
    <meta name='author' content='' />
    <meta httpEquiv='refresh' content='5' />

    <title>Clean Blog</title>

    <Link
      href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
      rel='stylesheet'
      type='text/css'
    />
    <Link
      href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
      rel='stylesheet'
      type='text/css'
    />
  </Head>;
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} key={router.route} />
      <Script async={false} src='static/js/jquery.min.js'></Script>
      <Script async={false} src='static/js/clean-blog.min.js'></Script>
      <Script async={false} src='static/js/bootstrap.min.js'></Script>
    </>
  );
}

export default MyApp;
