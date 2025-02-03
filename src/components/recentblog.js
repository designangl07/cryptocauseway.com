import React from 'react';
import { fetchAllPosts } from '../utils/api';
import Link from 'next/link'; // Use Link for client-side navigation
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';

const RecentBlogsSection = async () => {
  // Fetch real blog posts from WordPress
  const posts = await fetchAllPosts();

  // Map the fetched posts to the required structure
  const blogs = posts.slice(0, 3).map((post) => ({
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/default-blog-image.jpg', // Use featured image or a default
    title: decodeHtmlEntities(post.title.rendered).substring(0, 50) + '...',// Trim the title to 150 characters
    shortContent: decodeHtmlEntities(post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 120) + '...'), // Decode HTML entities in the content
    link: `/${post.slug}`,
  }));

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Recent Blogs</h2>
      <section className="row">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }} // Ensure consistent image size
              />
              <div className="card-body">
                <h4 className="card-title">{blog.title}</h4>
                <p className="card-text">{blog.shortContent}</p>
                <Link href={blog.link} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RecentBlogsSection;
