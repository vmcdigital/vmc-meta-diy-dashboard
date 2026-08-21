import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'The Ads Kitchen | Vector Marketing',
  description: 'The Ads Kitchen DIY Manager Resource Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-container">
          <Header />
          <main className="dashboard-main">{children}</main>
          <footer className="dashboard-footer">
            <p>Questions? Reach out to Joel Koncinsky at jkoncinsky@cutco.com or (318) 542-9251</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
