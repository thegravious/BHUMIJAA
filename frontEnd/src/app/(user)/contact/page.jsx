
"use client";

import React, { useState } from "react";

const Page = () => {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Contact API status:", response.status);
      console.log("Contact API response:", result);

      if (response.ok && result.success) {
        setStatus("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        setStatus(
          result.debug ||
            result.message ||
            `Unable to send your message (HTTP ${response.status}).`
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus(
        "Unable to connect to the email server. Check the browser console."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white mt-10 min-h-screen">
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 className="text-6xl text-center font-serif mb-10">
            Contact Us
          </h1>

          <p className="mb-8 lg:mb-16 font-light text-center text-[#262626]/70 sm:text-xl">
            Have a question about our products? Need help with an order?
            Want to share feedback? We would love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-[#262626]/70"
              >
                Your email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="shadow-sm bg-[#F4F4F4] border border-gray-200 text-[#262626] text-sm rounded-lg focus:ring-2 focus:ring-[#82B440] focus:border-[#82B440] block w-full p-3 outline-none transition"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-[#262626]"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                maxLength={200}
                className="block p-3 w-full text-sm text-[#262626] bg-[#F4F4F4] rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#82B440] focus:border-[#82B440] outline-none transition"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-[#262626]"
              >
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                maxLength={5000}
                className="block p-3 w-full text-sm text-[#262626] bg-[#F4F4F4] rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#82B440] focus:border-[#82B440] outline-none transition resize-y"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#1D2128] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#FF9E20] hover:text-[#1D2128] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send message"}
            </button>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm text-[#262626] break-words"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Page;
