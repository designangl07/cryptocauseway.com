import fetch from 'node-fetch';

const additionalPaths = async () => {
  // Fetch pages from your WordPress site
  const pagesResponse = await fetch('https://admin.cryptocauseway.com/wp-json/wp/v2/pages');
  const pages = await pagesResponse.json();

  // Fetch posts from your WordPress site
  const postsResponse = await fetch('https://admin.cryptocauseway.com/wp-json/wp/v2/posts');
  const posts = await postsResponse.json();

  // Generate page paths
  const pagePaths = pages.map((page) => ({
    loc: page.slug === 'home' ? '/' : `/${page.slug}`,
    lastmod: new Date(page.modified).toISOString(),
    changefreq: 'weekly',
    priority: page.slug === 'home' ? 1.0 : 0.7,
  }));

  // Generate post paths
  const postPaths = posts.map((post) => ({
    loc: `/${post.slug}`,
    lastmod: new Date(post.modified).toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));

  // Remove duplicates and combine page and post paths
  const uniquePaths = Array.from(
    new Map([...pagePaths, ...postPaths].map((item) => [item.loc, item])).values()
  );

  return uniquePaths;
};

export default {
  siteUrl: 'https://cryptocauseway.com', // Your production site URL
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 50000, // Large size to ensure a single file
  additionalPaths, // Dynamically generate additional paths
  generateIndexSitemap: false, // Disable index sitemap if not needed
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
    ],
  },
};
