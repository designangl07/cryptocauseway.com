import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // Import global CSS
import ClientLayout from './ClientLayout';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/vjg6msz.css" />
      </head>
      <body>
        {/* Client Component for Header, Footer, and Popup */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}