// utils/formHelpers.js

// Format phone number for display
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Format for Sierra Leone numbers
  if (cleaned.startsWith('+232')) {
    return cleaned.replace(/(\+232)(\d{2})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  } else if (cleaned.startsWith('232')) {
    return cleaned.replace(/(232)(\d{2})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
  }
  
  return phone;
};

// Generate WhatsApp message with RSVP details
export const generateWhatsAppMessage = (formData) => {
  const { name, phone, guests, attending, message } = formData;
  
  let msg = `*WEDDING RSVP - Issa & Isata*\n\n`;
  msg += `👤 *Name:* ${name}\n`;
  if (phone) msg += `📱 *Phone:* ${phone}\n`;
  msg += `👥 *Guests:* ${guests}\n`;
  msg += `✅ *Attending:* ${attending === 'yes' ? 'Yes 🎉' : 'No'}\n`;
  if (message) msg += `💌 *Message:* ${message}\n\n`;
  msg += `_Sent via wedding website_`;
  
  return encodeURIComponent(msg);
};

// Generate direct link to Google Forms (fallback)
export const getDirectFormUrl = () => {
  return "https://docs.google.com/forms/d/e/1FAIpQLScnauBtwjIGghKOP5Ljp5txEIymBLxzQsihxgFBQxLUFcBrzQ/viewform";
};