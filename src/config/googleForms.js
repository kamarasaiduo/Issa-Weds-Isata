// config/googleForms.js
export const GOOGLE_FORMS_CONFIG = {
  FORM_ID: "1FAIpQLScnauBtwjIGghKOP5Ljp5txEIymBLxzQsihxgFBQxLUFcBrzQ",
  
  // Your Entry IDs
  FIELD_IDS: {
    NAME: "entry.871395341",        // Name field (Required)
    EMAIL: "entry.1980784395",      // Email field (Optional)
    PHONE: "entry.1494263208",      // Phone Number field (Required)
    GUESTS: "entry.76795203",       // Number of Guests dropdown (Required)
    ATTENDING: "entry.316745560",   // Will you be attending? (radio) (Required)
    MESSAGE: "entry.117876940"      // Message for the couple (Optional)
  }
};

// Helper function to generate Google Form URL with pre-filled data
export const generateGoogleFormUrl = (formData) => {
  const { FORM_ID, FIELD_IDS } = GOOGLE_FORMS_CONFIG;
  
  const baseUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;
  const params = new URLSearchParams({
    'usp': 'pp_url',
    [FIELD_IDS.NAME]: formData.name || '',
    [FIELD_IDS.PHONE]: formData.phone || '',
    [FIELD_IDS.GUESTS]: formData.guests || '',
    [FIELD_IDS.ATTENDING]: formData.attending === 'yes' ? 'Yes' : 'No',
    [FIELD_IDS.MESSAGE]: formData.message || ''
  });
  
  // Add email only if provided (optional field)
  if (formData.email) {
    params.append(FIELD_IDS.EMAIL, formData.email);
  }

  return `${baseUrl}?${params.toString()}`;
};

// Test URL generator (for development)
export const testGoogleFormUrl = () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+232 123 456 789",
    guests: "2",
    attending: "yes",
    message: "Excited to attend your wedding!"
  };
  return generateGoogleFormUrl(testData);
};