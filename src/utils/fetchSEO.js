export async function fetchSEO(slug, type = "pages") {
    // Construct API URL dynamically based on the type and slug
    const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp/v2/${type}?slug=${slug}`;
    //console.log("Fetching SEO from URL:", apiUrl); // Debug log to check API URL

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
            },
            cache: "no-store", // Ensures fresh SEO data on each request
        });

        // Check if the response status is 404 (page not found)
        if (response.status === 404) {
            //console.error(`Page with slug ${slug} not found (404 error)`);
            return null; // Return null if it's a 404 error
        }

        if (!response.ok) {
            //console.error(`Failed to fetch SEO data for slug: ${slug}`);
            return null; // Return null if the response is not okay
        }

        const data = await response.json();
        console.log("Fetched SEO data:", data); // Debug log to check fetched data

        // Check if data is an empty array or no valid SEO data found
        if (!data || data.length === 0) {
            //console.warn(`No SEO data found for slug: ${slug}`); // Log a warning instead of an error
            return null; // Return null if no valid data is found for the given slug
        }

        const post = data[0]; // Extract first matching result

        // Fetch featured media URL if featured_media is present
        let ogImage = "/default-image.jpg"; // Default fallback image
        if (post.featured_media) {
            const mediaUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp/v2/media/${post.featured_media}`;
            const mediaResponse = await fetch(mediaUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
                },
            });

            if (mediaResponse.ok) {
                const mediaData = await mediaResponse.json();
                ogImage = mediaData.source_url; // Use the source URL of the media
            }
        }

        return {
            title: post.rank_math_title || post.title?.rendered || "Default Title", // Prefer rank math title, fall back to WP title
            description: post.rank_math_description || post.excerpt?.rendered || "Default description", // Use rank math description or WP excerpt
            keywords: post.rank_math_focus_keyword || "", // Use rank math focus keyword
            ogImage: ogImage, // Use the fetched featured media URL or default image
        };
    } catch (error) {
        //console.error("Error fetching SEO data:", error); // Log any unexpected errors
        return null; // Return null in case of an error
    }
}