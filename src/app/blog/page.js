import { fetchPageBySlug, fetchAllPosts } from '../../utils/api';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';

// Fetch SEO data for the blog page
export async function generateMetadata() {
  const page = await fetchPageBySlug('blog');

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

// Render the blog page with a list of posts
export default async function BlogPage() {
  const posts = await fetchAllPosts();

  return (
    <div>
      {/* Hero Section */}
      <div className='hero-inner'>
        <h1 className="text-center my-4">Blog</h1>
      </div>
      
      {/* Blog Posts Grid */}
      <Container className='blog-list'>
        <Row>
          {posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <div className='card'>
                {/* Featured Image */}
                {post.featured_media && post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img 
                    className='card-img-top'
                    src={post._embedded['wp:featuredmedia'][0].source_url} // Ensure featured media is embedded
                    alt={post.title.rendered}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                
                {/* Post Title and Excerpt */}
                <div className='card-body'>
                  <h2 className="mt-3">{decodeHtmlEntities(post.title.rendered).substring(0, 50) + '...'}</h2>
                  {/* Short Excerpt */}
                  <div dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 120) + '...',
                  }} />
                  
                  {/* Read More Link */}
                  <Link href={`/${post.slug}`} passHref className='btn btn-primary'>
                  Read More
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
