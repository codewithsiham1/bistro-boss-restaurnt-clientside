import React, { useState } from 'react';
import { MdEmail, MdPerson, MdMessage } from 'react-icons/md';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify you are not a robot.");
      return;
    }

    // Form submission logic goes here
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-[#FFA200] py-5 flex justify-center">
        <MdMessage className="text-3xl text-white" />
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-200 p-8 flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <MdPerson /> Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA200]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <MdEmail /> Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA200]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <MdMessage /> Message
          </label>
          <textarea
            placeholder="Write your message"
            rows="5"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA200]"
            required
          ></textarea>
        </div>

        {/* Google reCAPTCHA */}
        <ReCAPTCHA
          sitekey="YOUR_SITE_KEY_HERE"
          onChange={handleCaptchaChange}
        />

        <button
          type="submit"
          className="bg-[#FFA200] text-white font-semibold py-3 rounded hover:bg-[#e69400] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
