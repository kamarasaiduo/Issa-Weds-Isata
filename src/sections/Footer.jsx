
import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p>© 2026 Issa & Isata. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Designed with support and ❤️ by Saidu O. Kamara
        </p>
      </div>
    </footer>
  );
}
