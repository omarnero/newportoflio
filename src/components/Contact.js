import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const email = "omar.samch.diab@gmail.com";
  const phone = "+2001060415852";
  const formattedPhone = "+20 01060415852";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(formattedPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto fallback link with prefilled details
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden border-t border-white/5" id="contact">
      {/* Background ambient lighting */}
      <div className="ambient-glow-indigo bottom-0 left-1/4 opacity-20"></div>
      <div className="ambient-glow-cyan top-10 right-10 opacity-15"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4 mb-4"></div>
          <p className="text-slate-400 text-sm md:text-base max-w-lg">
            I am available for full-time Full Stack Developer roles, contracting, and ambitious web projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 text-xl border border-indigo-500/20">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email Me</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-indigo-400 font-semibold text-sm md:text-base transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm flex items-center gap-1"
                title="Copy email to clipboard"
                aria-label="Copy Email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 text-xl border border-cyan-500/20">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone / WhatsApp</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-white hover:text-cyan-400 font-semibold text-sm md:text-base transition-colors"
                  >
                    {formattedPhone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm flex items-center gap-1"
                title="Copy phone to clipboard"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xl border border-emerald-500/20">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</p>
                <p className="text-white font-semibold text-sm md:text-base">Cairo, Egypt (Remote Worldwide)</p>
                <p className="text-xs text-slate-400 mt-0.5">Flexible with international time zones</p>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">Connect Online:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/omar-sameh-diab/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/omarnero"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-6">
                Have a question, job proposal, or project idea? Drop me a note below.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                  <FiCheck className="text-lg flex-shrink-0" />
                  <span>Opening your email client... Looking forward to speaking with you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or position..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-glow transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FiSend className="text-base" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
