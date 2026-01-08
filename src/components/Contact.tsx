import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-16 bg-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Hubungi Kami
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Pilih platform tersantai buat ngobrol. Tenang, gak ada bot judgemental
          di sini… cuma kita.
        </p>
      </div>

      {/* Card Container */}
      <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/40 border border-white/50 rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6287731213462"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-8 py-4 rounded-xl font-semibold text-white bg-green-500 hover:bg-green-600 transition transform hover:-translate-y-1 shadow-lg"
        >
          WhatsApp
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/rmaaapacik/"
          target="_blank"
          rel="noopener noreferrer"z
          className="w-full text-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition transform hover:-translate-y-1 shadow-lg"
        >
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
