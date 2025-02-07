import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // Import global CSS
import ClientLayout from './ClientLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="stylesheet" href="https://use.typekit.net/vjg6msz.css" />
        <meta name="google-site-verification" content="5a1lIHoY1OBn86f4qsWQzjGLZrbBSO1RSJXxw0ANjSw" />
      </head>
      <body>
        {/* Client Component for Header, Footer, and Popup */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}