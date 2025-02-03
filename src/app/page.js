import { fetchPageBySlug } from '../utils/api';
import Homesections from '@/components/homesections';
import RecentBlogsSection from '@/components/recentblog';

// Fetch SEO data for the home page
export async function generateMetadata() {
  const page = await fetchPageBySlug('home');

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

// Render the home page content
export default function HomePage() {
  return (
    <div>
      <Homesections />
      <RecentBlogsSection />
    </div>
  );
}