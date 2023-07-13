import '../styles/globals.css';
import '../styles/styles.css';

import ServerNav from './server-nav';

export const metadata = {
  title: 'Discord Clone',
  description: 'Made by Vaibhav Khulbe with Tailwind CSS and Next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen text-gray-100'>
          {/* Server selector */}
          <ServerNav />
          {children}
        </div>
      </body>
    </html>
  );
}
