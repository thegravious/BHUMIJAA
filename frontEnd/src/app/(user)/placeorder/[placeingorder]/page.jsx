
"use client";

import React, { useState } from "react";

export default function PlaceOrder() {
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!consent) {
            setMessage("Please agree before submitting your request.");
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Match the fields expected by your Express backend
        const data = {
            email: formData.get("email"),
            subject: "BHUMIJAA Mattress Enquiry",
            message: [
                "New mattress enquiry received from the BHUMIJAA website.",
                "",
                `Customer Name: ${formData.get("name")}`,
                `Customer Email: ${formData.get("email")}`,
                `Customer Phone: ${formData.get("phone")}`,
                "",
                "Please contact the customer regarding their mattress enquiry.",
            ].join("\n"),
        };

        setLoading(true);
        setMessage("");

        try {
            // Use the same endpoint as your Contact Us form
            const response = await fetch(
                "http://localhost:5001/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const responseText = await response.text();

            let result;

            try {
                result = JSON.parse(responseText);
            } catch {
                throw new Error(
                    `The server returned an invalid response (HTTP ${response.status}). Check that your email backend is running on port 5001.`
                );
            }

            console.log("Contact API status:", response.status);
            console.log("Contact API response:", result);

            if (response.ok && result.success) {
                setMessage(
                    "Thank you! Your enquiry has been sent successfully."
                );

                form.reset();
                setConsent(false);
            } else {
                throw new Error(
                    result.debug ||
                    result.message ||
                    `Unable to send your enquiry (HTTP ${response.status}).`
                );
            }
        } catch (error) {
            console.error("Enquiry form error:", error);

            setMessage(
                error.message ||
                "Unable to connect to the email server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F4F2F2] px-4 py-24 text-[#1D2128] sm:px-6">
            <div className="mx-auto max-w-3xl overflow-hidden bg-white shadow-sm">

                {/* Top Video */}
                <div className="relative h-64 w-full overflow-hidden sm:h-96">
                    <video
                        src="/trailvideo3.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Brand Story */}
                <section className="px-6 py-10 text-center sm:px-12 sm:py-14">
                    <h1 className="mb-10 font-serif text-4xl leading-tight sm:text-6xl">
                        Great Sleep Isn't Rushed.
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        At BHUMIJAA, we believe better sleep begins with the right
                        choice. Every sleeper has different needs, and choosing a
                        mattress deserves more thought than a quick click.
                    </p>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        That’s why we invite you to submit an enquiry instead of
                        placing an instant order. Our team can understand your
                        preferences, help you explore the right comfort, and guide
                        you towards a choice that feels right for you.
                    </p>

                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#FF9E20] sm:tracking-[0.25em]">
                        Something Great Is Being Sewn for You.
                    </p>
                </section>

                {/* Enquiry Form */}
                <section className="border-t border-gray-200 px-6 py-10 sm:px-12 sm:py-12">
                    <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                            Let's Find Your Comfort
                        </p>

                        <h2 className="mt-3 font-serif text-3xl">
                            Request a Call Back
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Share your details and our team will help you take the
                            next step towards better sleep.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                maxLength={120}
                                required
                                className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF9E20]"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                autoComplete="email"
                                maxLength={254}
                                required
                                className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF9E20]"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-medium"
                            >
                                Phone Number
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter your 10-digit mobile number"
                                autoComplete="tel"
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                minLength={10}
                                required
                                className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-[#FF9E20]"
                            />
                        </div>

                        {/* Consent */}
                        <div className="flex items-start gap-3">
                            <input
                                id="consent"
                                name="consent"
                                type="checkbox"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                required
                                className="mt-1 h-4 w-4 accent-[#FF9E20]"
                            />

                            <label
                                htmlFor="consent"
                                className="text-sm leading-6 text-gray-600"
                            >
                                I agree to be contacted by BHUMIJAA regarding my
                                enquiry and acknowledge the applicable privacy
                                policy.
                            </label>
                        </div>

                        {/* Status Message */}
                        {message && (
                            <p
                                role="status"
                                aria-live="polite"
                                className={`break-words text-sm ${
                                    message.startsWith("Thank you")
                                        ? "text-green-700"
                                        : "text-red-600"
                                }`}
                            >
                                {message}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1D2128] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#FF9E20] hover:text-[#1D2128] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Sending Enquiry..." : "Submit Request"}
                        </button>

                        <p className="text-center text-xs text-gray-500">
                            No pressure. Just guidance towards a more comfortable sleep.
                        </p>
                    </form>
                </section>
            </div>
        </main>
    );
}
