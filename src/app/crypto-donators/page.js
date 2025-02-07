// app/services/page.js (Server Component)
import { fetchPageBySlug } from '../../utils/api';
import CryptoDonatorsPage from './client-page'; // Import the Client Component

export async function generateMetadata() {
  const page = await fetchPageBySlug('crypto-donators');

  return {
    title: page.rank_math_title || page.title.rendered || 'Default Title',
    description: page.rank_math_description || page.excerpt.rendered || 'Default description',
    keywords: page.rank_math_focus_keyword || '',
    openGraph: {
      images: [
        {
          url: page.rank_math_og_content_image || 'default-image-url.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

// Render the Client Component inside the Server Component
export default function Page() {
  return <CryptoDonatorsPage />;
}