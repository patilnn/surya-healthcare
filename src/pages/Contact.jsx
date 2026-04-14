const Contact = () => {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        
        <form className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-xl font-semibold">Send Message</h2>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="How can we help you?"
              rows="5"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <iframe
            title="Surya Hospital Location"
            src="https://maps.google.com/maps?q=pimpri%20chinchwad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            className="h-64 w-full rounded-3xl border border-slate-200"
          ></iframe>

          <div className="rounded-3xl bg-slate-100 p-6 shadow-sm">
            <p className="text-slate-800">
              <strong>Address:</strong> Spine Road, Chinchwad, Pune
            </p>
            <p className="mt-3 text-slate-800">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mt-3 text-slate-800">
              <strong>Email:</strong> contact@suryahospital.example
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;