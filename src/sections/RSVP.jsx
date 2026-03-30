import React, { useState, useEffect } from "react";
import { 
  FiCheckCircle, 
  FiXCircle, 
  FiRefreshCw,
  FiInfo,
  FiUser,
  FiMail,
  FiPhone,
  FiUsers,
  FiMessageCircle,
  FiCalendar,
  FiClock
} from "react-icons/fi";
import { FaGoogle, FaWhatsapp, FaRegCalendarCheck } from "react-icons/fa";
import { generateGoogleFormUrl } from "../config/googleForms";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: "yes",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formUrl, setFormUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [deadlineCountdown, setDeadlineCountdown] = useState({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  });

  // Generate form URL whenever formData changes
  useEffect(() => {
    if (formData.name && formData.phone) {
      const url = generateGoogleFormUrl(formData);
      setFormUrl(url);
    }
  }, [formData]);

  // Deadline countdown timer with SECONDS
  useEffect(() => {
    const deadlineDate = new Date("2026-05-01T23:59:59");
    
    const updateCountdown = () => {
      const diff = deadlineDate - new Date();

      if (diff <= 0) {
        setDeadlineCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setDeadlineCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Open Google Form in SAME TAB
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Generate Google Form URL with pre-filled data
    const url = generateGoogleFormUrl(formData);
    
    // Store form data in localStorage before redirecting
    localStorage.setItem('weddingRsvpData', JSON.stringify(formData));
    localStorage.setItem('weddingRsvpReturnUrl', window.location.href);
    
    // Redirect to Google Form in SAME TAB
    window.location.href = url;
    
    // Show loading state (though page will redirect)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Handle returning from Google Form
  useEffect(() => {
    const checkReturnFromForm = () => {
      const returnUrl = localStorage.getItem('weddingRsvpReturnUrl');
      const rsvpData = localStorage.getItem('weddingRsvpData');
      
      if (returnUrl && window.location.href.includes('docs.google.com/forms')) {
        // We're on Google Forms, do nothing
        return;
      }
      
      if (returnUrl && rsvpData && !window.location.href.includes('docs.google.com')) {
        // We returned from Google Forms
        try {
          const data = JSON.parse(rsvpData);
          setFormData(data);
          setSubmitted(true);
          
          // Clean up
          localStorage.removeItem('weddingRsvpData');
          localStorage.removeItem('weddingRsvpReturnUrl');
        } catch (error) {
          console.error('Error parsing RSVP data:', error);
        }
      }
    };
    
    checkReturnFromForm();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "1",
      attending: "yes",
      message: ""
    });
    setSubmitted(false);
    setErrors({});
  };

  // Fallback function if user needs to open manually
  const openFormManually = () => {
    if (formUrl) {
      // Still open in same tab for consistency
      window.location.href = formUrl;
    }
  };

  return (
    <section id="rsvp" className="py-16 md:py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-sage-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFA500] mb-6">
            <FaRegCalendarCheck className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            RSVP via Google Forms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in your details below to submit your RSVP
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
            <FiInfo className="w-4 h-4 mr-2" />
            RSVP deadline: May 01, 2026
            
          </div>
          <br />
            <div className="mt-4 inline-flex items-center px-4 py-2  text-blue-700 ">
           
            RSVP means:
          </div>
               <div className="mt-4 inline-flex items-center px-4 py-2 bg-orange-50 rounded-full text-sm">
           
             Are you coming or not?
            
          </div>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-green-100">
            <div className="animate-bounce mb-6">
              <FiCheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Thank You for RSVPing! 🎉
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Your RSVP has been submitted successfully. We look forward to celebrating with you!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700 mb-2">✅ <strong>RSVP Confirmed:</strong></p>
                <ul className="text-sm text-green-600 text-left space-y-1">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1 mr-2"></span>
                    Name: <strong>{formData.name}</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1 mr-2"></span>
                    Guests: <strong>{formData.guests} {formData.guests === '1' ? 'person' : 'people'}</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1 mr-2"></span>
                    Status: <strong>{formData.attending === 'yes' ? 'Attending' : 'Not Attending'}</strong>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetForm}
                  className="flex items-center justify-center px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#FFA500] transition-colors shadow hover:shadow-md"
                >
                  <FiRefreshCw className="w-5 h-5 mr-2" />
                  Submit Another RSVP
                </button>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Need to make changes? Contact us:</p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/23279767376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  WhatsApp: +232 797 673 76
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Your Information
                  </h3>
                  <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    <FaGoogle className="w-4 h-4 mr-1" />
                    Google Forms
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FiUser className="inline-block w-4 h-4 mr-2 text-gray-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition-colors outline-none ${
                          errors.name 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                            : 'border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FiMail className="inline-block w-4 h-4 mr-2 text-gray-500" />
                        Email Address <span className="text-gray-500 text-sm">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition-colors outline-none ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                            : 'border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        We'll only use this to send confirmation
                      </p>
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FiPhone className="inline-block w-4 h-4 mr-2 text-gray-500" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 transition-colors outline-none ${
                          errors.phone 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                            : 'border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                        }`}
                        placeholder="+232 797 673 76"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Guests Field */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          <FiUsers className="inline-block w-4 h-4 mr-2 text-gray-500" />
                          Number of Guests *
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors outline-none"
                        >
                          <option value="" disabled>Select number of guests</option>
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5+">5+ Guests</option>
                        </select>
                      </div>
                      
                      {/* Attendance Field */}
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          <FiCalendar className="inline-block w-4 h-4 mr-2 text-gray-500" />
                          Will you be attending? *
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <label className="flex-1">
                            <input
                              type="radio"
                              name="attending"
                              value="yes"
                              checked={formData.attending === "yes"}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <div className={`w-full px-4 py-3 rounded-lg text-center cursor-pointer transition-all ${
                              formData.attending === "yes" 
                                ? 'bg-green-100 text-green-700 border-2 border-green-300 font-semibold' 
                                : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:border-green-200'
                            }`}>
                              <FiCheckCircle className="inline-block w-4 h-4 mr-1" />
                              Yes, I'll be there
                            </div>
                          </label>
                          
                          <label className="flex-1">
                            <input
                              type="radio"
                              name="attending"
                              value="no"
                              checked={formData.attending === "no"}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <div className={`w-full px-4 py-3 rounded-lg text-center cursor-pointer transition-all ${
                              formData.attending === "no" 
                                ? 'bg-red-100 text-red-700 border-2 border-red-300 font-semibold' 
                                : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:border-red-200'
                            }`}>
                              <FiXCircle className="inline-block w-4 h-4 mr-1" />
                              Sorry, can't make it
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        <FiMessageCircle className="inline-block w-4 h-4 mr-2 text-gray-500" />
                        Message for the couple <span className="text-gray-500 text-sm">(Optional)</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-colors outline-none resize-none"
                        placeholder="Leave a sweet message for Issa & Isata..."
                        maxLength="500"
                      />
                      <div className="flex justify-between mt-1">
                        <p className="text-sm text-gray-500">
                          Your message will be shared with the couple
                        </p>
                        <span className={`text-sm ${formData.message.length > 450 ? 'text-red-500' : 'text-gray-500'}`}>
                          {formData.message.length}/500
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      type="submit"
                      disabled={isLoading || !formData.name || !formData.phone}
                      className={`w-full px-6 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center ${
                        isLoading || !formData.name || !formData.phone
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#D4AF37] to-[#FFA500] text-white hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Opening Google Form...
                        </>
                      ) : (
                        <>
                          <FaGoogle className="w-5 h-5 mr-2" />
                          Submit RSVP via Google Forms
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      Your information will be pre-filled in Google Forms
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right Column - Instructions & Info */}
            <div className="space-y-6">
              {/* How It Works */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="text-lg font-bold text-blue-800 mb-3">
                  📋 How It Works
                </h4>
                <ol className="space-y-3">
                  {[
                    "Fill in your details above",
                    "Click 'Submit RSVP via Google Forms'",
                    "You'll be taken to Google Forms",
                    "Review your pre-filled information",
                    "Click 'Submit' on Google Forms",
                    "Return to see your confirmation"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-blue-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* FIXED: Deadline with Countdown INCLUDING SECONDS */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-center mb-4">
                  <FiClock className="w-5 h-5 text-amber-600 mr-2" />
                  <h4 className="text-lg font-bold text-amber-800">
                    ⏰ RSVP Deadline Countdown
                  </h4>
                </div>
                <p className="text-amber-700 mb-4">
                  Please RSVP by <strong>May 01, 2026</strong>
                </p>
                
                {/* Countdown Display with 4 boxes (Days, Hours, Minutes, Seconds) */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {/* Days */}
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-amber-600">
                      {deadlineCountdown.days}
                    </div>
                    <div className="text-xs text-amber-500 uppercase">
                      Days
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-amber-600">
                      {deadlineCountdown.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-amber-500 uppercase">
                      Hours
                    </div>
                  </div>
                  
                  {/* Minutes */}
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-amber-600">
                      {deadlineCountdown.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-amber-500 uppercase">
                      Minutes
                    </div>
                  </div>
                  
                  {/* Seconds - ADDED */}
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-amber-600">
                      {deadlineCountdown.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-amber-500 uppercase">
                      Seconds
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-amber-600">
                  Late RSVPs may not be accommodated due to venue capacity.
                </p>
              </div>
              
              {/* Direct Contact - WhatsApp Only */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  📞 Need Help?
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Having trouble with the form? Contact us via WhatsApp:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/23279767376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow hover:shadow-md"
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    WhatsApp: +232 797 673 76
                  </a>
                  <p className="text-xs text-gray-500 text-center">
                    (This is our only contact number for RSVP inquiries)
                  </p>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h4 className="text-lg font-bold text-green-800 mb-3">
                  ✅ Why RSVP Early?
                </h4>
                <ul className="space-y-2 text-green-700">
                  {[
                    "Help us plan seating arrangements",
                    "Ensure we have enough food & drinks",
                    "Get priority for special accommodations",
                    "Receive wedding updates & reminders"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
            ❓ Frequently Asked Questions
          </h4>
          <div className="space-y-4">
            {[
              {
                q: "Why does it open Google Forms?",
                a: "Google Forms helps us organize all RSVPs automatically and send you a confirmation email. Your information is pre-filled for convenience."
              },
              {
                q: "What if Google Forms is blocked?",
                a: "Please contact us directly via WhatsApp at +232 797 673 76 and we'll help you submit your RSVP manually."
              },
              {
                q: "Can I submit for my family?",
                a: "Yes! Please include all guests in the 'Number of Guests' field and list their names in the message section if needed."
              },
              {
                q: "What if my plans change after submitting?",
                a: "Please contact us via WhatsApp as soon as possible so we can update our records."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <p className="font-medium text-gray-800 mb-1">{faq.q}</p>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}