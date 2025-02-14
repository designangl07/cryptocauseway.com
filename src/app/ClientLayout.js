"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Header from '../components/header';
import Footer from '../components/footer';
import Popup from '../components/popup';
import { fetchPageBySlug, fetchPostBySlug } from "@/utils/api"; // Add import for API functions

export default function ClientLayout({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false); // Track if the page/post is not found
  const pathname = usePathname(); // Get the current path
  const is404Page = pathname === '/404'; // Check if it's the 404 page
  const canonicalUrl = `https://cryptocauseway.com${pathname}`; // Construct canonical URL

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Check if the page or post exists using useEffect
  useEffect(() => {
    const checkPageOrPostExistence = async () => {
      const slug = pathname.split("/").pop(); // Assuming the last part of the pathname is the slug
      
      // Fetch page or post by slug
      const page = await fetchPageBySlug(slug);
      const post = await fetchPostBySlug(slug);

      if (!page && !post) {
        setIsNotFound(true); // If neither page nor post exists
      } else {
        setIsNotFound(false);
      }
    };

    checkPageOrPostExistence();
  }, [pathname]);

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

      {/* Render meta tags based on page existence */}
      {!isNotFound ? (
        // If the page exists, render the default meta tags
        <>
          <meta name="robots" content="index, follow" />
          <meta name="msvalidate.01" content="5DBE4CC04E10F62173EA469AA31EEDD4" />
          <meta name="google-site-verification" content="5a1lIHoY1OBn86f4qsWQzjGLZrbBSO1RSJXxw0ANjSw" />
          <link rel="canonical" href={canonicalUrl} />
        </>
      ) : (
        // If page is not found, render noindex meta tag
        <>
          <meta name="robots" content="noindex, nofollow" data-next-head="" />
        </>
      )}
    </>
  );
}
