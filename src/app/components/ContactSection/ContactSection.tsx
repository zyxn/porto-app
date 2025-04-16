"use client";

export default function ContactSection() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center"
      id="contacts"
    >
      <div className="bg-[url('/img/bg2.jpg')] bg-cover bg-center opacity-25 absolute inset-0 z-0 bg-fixed" />
      <div className="relative z-10 w-full max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">Email: contact@zadosaadi.com</p>
            <p className="mb-4">Phone: +62 123 4567 890</p>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-[#27AE8E] rounded hover:bg-[#1e8c74] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
