import { useState } from "react";
import { useMutation } from "@animaapp/playground-react-sdk";
import emailjs from "@emailjs/browser";

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail, Outlook, etc.) → copy Service ID
// 3. Create an email template with variables:
//      {{from_name}}, {{address}}, {{from_email}}, {{phone}}
//    → copy Template ID
// 4. Go to Account → Public Key → copy it
// Replace the three placeholder strings below with your real values:
const EMAILJS_SERVICE_ID = "service_4feen2i";
const EMAILJS_TEMPLATE_ID = "template_3gmb29s";
const EMAILJS_PUBLIC_KEY = "xqYX_i0m1bVCxftGG";
// ─────────────────────────────────────────────────────────────────

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { create, isPending, error } = useMutation("InspectionRequest");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !address.trim() || !email.trim()) return;
    try {
      await create({ name, address, email, phone: phone.trim() });

      // Send email notification if EmailJS keys are configured
      if (
        EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
        EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
        EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
      ) {
        emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              from_name: name,
              address: address,
              from_email: email,
              phone: phone || "Not provided",
              message: message || "No message provided",
              to_email: "colep123888@gmail.com",
              reply_to: email,
            },
            EMAILJS_PUBLIC_KEY,
          )
          .catch((err) => {
            console.error("EmailJS send failed:", err?.status, err?.text);
          });
      }

      setSubmitted(true);
      setName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error("Failed to submit inspection request:", err);
    }
  };

  const inputClass =
    "w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-2xl px-5 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition";

  return (
    <section
      id="contact"
      className="box-border caret-transparent outline-[3px] pt-9 pb-[72px]"
    >
      <div className="text-white bg-[linear-gradient(145deg,rgba(16,63,95,0.96),rgba(7,59,90,0.96)),repeating-linear-gradient(-45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_10px,rgba(0,0,0,0)_10px,rgba(0,0,0,0)_20px)] box-border caret-transparent outline-[3px] w-[345px] border mx-auto px-[22px] py-[30px] rounded-[32px] border-solid border-white/40 md:w-[700px] md:p-11">
        <h2 className="text-[32px] font-bold box-border caret-transparent tracking-[0.96px] outline-[3px] font-bebas_neue md:text-[48px] md:tracking-[1.4px]">
          Book Your Free Inspection
        </h2>
        <p className="text-white/70 mt-2 mb-7 text-[15px] leading-relaxed">
          Fill out the form below and a RidgeCrest Roofing specialist will reach
          out to schedule your free roof inspection.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-xl font-bold font-bebas_neue tracking-wide">
              Request Submitted!
            </p>
            <p className="text-white/70 text-sm max-w-[320px]">
              Thank you! We&#39;ll be in touch shortly to confirm your free
              inspection.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-orange-400 underline text-sm hover:text-orange-300 transition"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-white/70 text-sm mb-1.5 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isPending}
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1.5 font-medium">
                Property Address
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder="123 Main St, Jacksonville, FL"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                disabled={isPending}
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1.5 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isPending}
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1.5 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                className={inputClass}
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isPending}
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1.5 font-medium">
                Message
              </label>
              <textarea
                className={`${inputClass} resize-none`}
                placeholder="Tell us a little about your roofing needs — age of roof, visible damage, insurance claim, etc."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isPending}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="mt-2 font-bold items-center bg-[linear-gradient(145deg,rgb(211,92,47),rgb(255,143,88))] shadow-[rgba(211,92,47,0.3)_0px_12px_24px_0px] box-border caret-transparent gap-x-2 flex justify-center outline-[3px] w-full border px-[19.2px] py-[14px] rounded-[999px] border-solid border-transparent disabled:opacity-60 disabled:cursor-not-allowed transition text-[15px]"
            >
              {isPending ? "Submitting..." : "Book Free Inspection"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
