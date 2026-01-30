import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // WhatsApp numbers (replace with actual numbers)

  const groomsmanWhatsAppNumber = "+23277212454"; // Replace with groomsman's actual number
    const brideWhatsAppNumber = "+23288966047"; // Replace with bride's actual number
  
  // Format numbers for display (remove plus sign for display)
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace('+', '').replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  };

  // Create WhatsApp links

  const groomsmanWhatsAppLink = `https://wa.me/${groomsmanWhatsAppNumber.replace('+', '')}`;
    const brideWhatsAppLink = `https://wa.me/${brideWhatsAppNumber.replace('+', '')}`;

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p>© 2026 Issa & Isata. All rights reserved.</p>
        


        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
      
          
          {/* Groomsman's WhatsApp */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-blue-300 font-medium">Groom</span>
              <FaWhatsapp className="text-green-500 text-xl" />
            </div>
            <a 
              href={groomsmanWhatsAppLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              {formatPhoneNumber(groomsmanWhatsAppNumber)}
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded">Chat</span>
            </a>
          </div>

              {/* Bride's WhatsApp */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-pink-300 font-medium">Bride</span>
              <FaWhatsapp className="text-green-500 text-xl" />
            </div>
            <a 
              href={brideWhatsAppLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              {formatPhoneNumber(brideWhatsAppNumber)}
              <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded">Chat</span>
            </a>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mt-2">
          Designed with support and ❤️ by Saidu O. Kamara
        </p>
      </div>
    </footer>
  );
}