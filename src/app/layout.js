import './globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

import Header from './Header';
import Footer from './Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${raleway.className} js`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
