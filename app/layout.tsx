import Footer from '@/components/Footer';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '이라규의 개인 홈페이지',
    template: '이라규의 개인 홈페이지 | %s',
  },
  description: '이라규의 개인 홈페이지입니다.',
  icons: {
    icons: '👋🏻',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col w-full mx-auto">
        background-image: url('/path/to/image.jpg');
        <Navbar />
        <main className="md:mx-auto max-w-3xl px-4 sm:px-6 overflow-x-hidden md:max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
