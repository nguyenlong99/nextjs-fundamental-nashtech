import { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../public/css/clean-blog.min.css';
import '../public/css/gg-font-lora.css';
import '../public/css/gg-font-opensans.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Clean Blog',
  description: 'Welcome to My Blog',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>

      <Script async={false} src='../public/static/js/jquery.min.js'></Script>
      <Script async={false} src='../public/static/js/clean-blog.min.js'></Script>
      <Script async={false} src='../public/static/js/bootstrap.min.js'></Script>
    </html>
  );
}
