// api.js

export const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API;
export const JWT_TOKEN = process.env.NEXT_PUBLIC_JWT_TOKEN;

export async function fetchPageBySlug(slug) {
  const res = await fetch(`${API_URL}/wp/v2/pages?slug=${slug}`, {
    headers: {
      Authorization: `Bearer ${JWT_TOKEN}`,
    },
  });
  const data = await res.json();
  return data[0]; // Assuming the slug is unique and returns a single page
}

export async function fetchAllPosts() {
  const res = await fetch(`${API_URL}/wp/v2/posts?_embed`, {
    headers: {
      Authorization: `Bearer ${JWT_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchPostBySlug(slug) {
  const res = await fetch(`${API_URL}/wp/v2/posts?slug=${slug}&_embed`, {
    headers: {
      Authorization: `Bearer ${JWT_TOKEN}`,
    },
  });
  const data = await res.json();
  return data[0]; // Assuming the slug is unique and returns a single post
}
