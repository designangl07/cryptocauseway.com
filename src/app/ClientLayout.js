"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Header from '../components/header';
import Footer from '../components/footer';
import Popup from '../components/popup';
import { fetchSEO } from "@/utils/fetchSEO";

export default function ClientLayout({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPostFound, setIsPostFound] = useState(true); // Track whether post is found or not
  const pathname = usePathname(); // Get the current path
  const slug = pathname.split('/').pop(); // Extract the slug from the URL path
  const is404Page = pathname === '/404'; // Check if it's the 404 page
  const canonicalUrl = `https://cryptocauseway.com${pathname}`; // Construct canonical URL

  // Fetch post data to check if it exists
  useEffect(() => {
    const checkPostExists = async () => {
      const post = await fetchSEO(slug); // Fetch post data based on slug
      setIsPostFound(!!post); // Set state based on whether post is found
    };

    checkPostExists();
  }, [slug]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    script.onload = () => console.log("Bootstrap JS loaded");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header openPopup={openPopup} />
      <main>{children}</main>
      <Footer />
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />

      {/* Meta tags for valid pages (when post is found) */}
      {!is404Page && isPostFound && (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="google-site-verification" content="5a1lIHoY1OBn86f4qsWQzjGLZrbBSO1RSJXxw0ANjSw" />
          <link rel="canonical" href={canonicalUrl} />
        </>
      )}

      {/* Meta tag for 404 pages or when post is not found */}
      {(is404Page || !isPostFound) && (
        <meta name="robots" content="noindex" />
      )}
    </>
  );
}
