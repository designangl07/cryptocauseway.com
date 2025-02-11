import { fetchSEO } from "@/utils/fetchSEO";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { decode } from 'he';

// Fetch SEO data for individual blog post
// Fetch SEO data for individual blog post
export async function generateMetadata({ params }) {
    // Await the params if needed
    if (!params?.slug) {
        return {
            title: "404 Not Found",
            description: "The page you are looking for does not exist.",
            keywords: "404, not found",
            openGraph: {
                title: "404 Not Found",
                description: "The page you are looking for does not exist.",
                images: [{ url: "/default-image.jpg" }],
            },
        };
    }

    const slug = decodeURIComponent(params.slug); // Ensure slug is correctly decoded
    const seo = await fetchSEO(slug, "posts");

    if (!seo) {
        return {
            title: "404 Not Found",
            description: "The page you are looking for does not exist.",
            keywords: "404, not found",
            openGraph: {
                title: "404 Not Found",
                description: "The page you are looking for does not exist.",
                images: [{ url: "/default-image.jpg" }],
            },
        };
    }

    let cleanDescription = seo?.description ? seo.description.replace(/<[^>]*>?/gm, '') : "Default Description";
    cleanDescription = decode(cleanDescription);

    return {
        title: seo?.title || "Default Title",
        description: cleanDescription,
        keywords: seo?.keywords || "",
        openGraph: {
            title: seo?.title || "Default Title",
            description: cleanDescription,
            images: [{ url: seo?.ogImage || "/default-image.jpg" }],
        },
    };
}

// Fetch the full post content
export async function fetchPost(slug) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp/v2/posts?slug=${slug}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
        },
    });

    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return data[0]; // Return the first matching post
}

export default async function BlogPostPage({ params }) {
    // Ensure params are available before accessing
    if (!params?.slug) {
        return (
            <div className="error-container">
                <div className="error-content">
                    <h1 className="next-error-h1">404</h1>
                    <div>
                        <h2>This page could not be found.</h2>
                    </div>
                </div>
            </div>
        );
    }

    const slug = decodeURIComponent(params.slug); // Ensure slug is correctly decoded
    const post = await fetchPost(slug);

    if (!post) {
        return (
            <div className="error-container">
                <div className="error-content">
                    <h1 className="next-error-h1">404</h1>
                    <div>
                        <h2>This page could not be found.</h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Section */}
            <div className='hero-inner'>
                <Container className="blog">
                    <h1 className="text-center">{post.title.rendered}</h1>
                </Container>
            </div>
            <main className="blog">
                <Container>
                    <Row>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </Row>
                </Container>
            </main>
        </div>
    );
}

