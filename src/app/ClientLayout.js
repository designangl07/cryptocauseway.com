"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Header from '../components/header';
import Footer from '../components/footer';
import Popup from '../components/popup';

export default function ClientLayout({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname(); // Get the current path
  const canonicalUrl = `https://cryptocauseway.com${pathname}`; // Construct canonical URL
  const is404Page = pathname === '/404'; // Check if it's the 404 page

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
      {/* Render canonical link only if it's not the 404 page */}
      {!is404Page && (
        <link rel="canonical" href={canonicalUrl} />
      )}
    </>
  );
}