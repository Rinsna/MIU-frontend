import ClientLayout from '@/components/ClientLayout';
import '@/styles/globals.css';
import '@/styles/App.css';

export const metadata = {
  title: 'Manipur International University | Excellence in Education',
  description: 'Official website of Manipur International University. Transform your future with world-class education.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
