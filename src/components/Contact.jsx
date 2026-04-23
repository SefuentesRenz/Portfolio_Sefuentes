import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('success');
  const [isSending, setIsSending] = useState(false);

  const openMailFallback = () => {
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:sefuentesrenz31@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus('Sending your message...');
    setStatusType('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sefuentesrenz31@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success !== 'true') {
        if (data?.message?.toLowerCase().includes('activation')) {
          setStatus('Email service needs one-time activation. Opening your email app as fallback now.');
          setStatusType('error');
          openMailFallback();
          return;
        }

        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('Message sent successfully! I\'ll get back to you soon.');
      setStatusType('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Could not send automatically. Opening your email app as fallback.');
      setStatusType('error');
      openMailFallback();
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-linear-to-b from-black/45 via-purple-950/20 to-black/45">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's work together! Get in touch for collaborations or opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-black/45 border border-purple-900/45 rounded-xl hover:bg-purple-950/45 transition-all">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:sefuentesrenz31@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors">sefuentesrenz31@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-black/45 border border-purple-900/45 rounded-xl hover:bg-purple-950/45 transition-all">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+639629560979" className="text-gray-300 hover:text-pink-400 transition-colors">+63 962 956 0979</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-black/45 border border-purple-900/45 rounded-xl hover:bg-purple-950/45 transition-all">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Davao City, Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/45 border border-purple-900/45 rounded-3xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  className="w-full px-5 py-4 bg-black/35 border border-purple-900/50 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  className="w-full px-5 py-4 bg-black/35 border border-purple-900/50 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                  className="w-full px-5 py-4 bg-black/35 border border-purple-900/50 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 focus:outline-none transition-all resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-linear-to-r cursor-pointer from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <div
                  className={`text-center py-4 px-6 rounded-2xl font-medium ${
                    statusType === 'error'
                      ? 'bg-red-500/20 border border-red-500/30 text-red-300'
                      : statusType === 'sending'
                        ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                        : 'bg-green-500/20 border border-green-500/30 text-green-400'
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

