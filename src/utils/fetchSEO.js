// utils/fetchSEO.js
export async function fetchSEO(slug, type = "pages") {
    // Construct API URL dynamically based on the type and slug
    const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp/v2/${type}?slug=${slug}`;
    console.log("Fetching SEO from URL:", apiUrl); // Debug log to check API URL

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
            },
            cache: "no-store", // Ensures fresh SEO data on each request
        });

        if (!response.ok) {
            console.error(`Failed to fetch SEO data for slug: ${slug}`);
            return null; // Return null if the response is not okay
        }

        const data = await response.json();
        console.log("Fetched SEO data:", data); // Debug log to check fetched data

        if (!data.length) {
            console.error(`No SEO data found for slug: ${slug}`);
            return null; // Return null if no data is found for the given slug
        }

        const post = data[0]; // Extract first matching result
        return {
            title: post.rank_math_title || post.title?.rendered || "Default Title", // Prefer rank math title, fall back to WP title
            description: post.rank_math_description || post.excerpt?.rendered || "Default description", // Use rank math description or WP excerpt
            keywords: post.rank_math_focus_keyword || "", // Use rank math focus keyword
            ogImage: post.rank_math_og_content_image || "/default-image.jpg", // Use rank math OG image, fall back to default
        };
    } catch (error) {
        console.error("Error fetching SEO data:", error); // Log any unexpected errors
        return null; // Return null in case of an error
    }
}
