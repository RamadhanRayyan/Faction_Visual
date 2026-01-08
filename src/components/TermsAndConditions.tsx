import { useEffect, useRef, useState } from 'react';
import {
  CreditCard,
  RefreshCw,
  Zap,
  Clock,
  Bug,
  DollarSign,
  FileText,
} from 'lucide-react';

export default function TermsAndConditions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const terms = [
    {
      icon: <CreditCard size={24} />,
      title: 'Down Payment 40%',
      description: 'Down payment sebesar 40% dari total project sebagai Project Initiation Fee wajib dilunasi sebelum pengerjaan dimulai.',
      accent: true,
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Revisi Maksimal 3 Kali',
      description: 'Paket project mencakup maksimal 3 kali revisi untuk setiap tahap pengerjaan sesuai ruang lingkup yang disepakati.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Revisi Tambahan Berbayar',
      description: 'Revisi tambahan diluar paket dasar akan dikenakan biaya tambahan yang akan didiskusikan sebelumnya.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Perubahan Fitur Major',
      description: 'Perubahan fitur besar atau penambahan fitur utama yang signifikan akan dianggap sebagai pengerjaan baru dan memerlukan kontrak terpisah.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Estimasi Waktu Dinamis',
      description: 'Timeline pengerjaan disesuaikan dengan tingkat kompleksitas project. Diskusi mengenai timeline dilakukan di awal project untuk clarity.',
    },
    {
      icon: <Bug size={24} />,
      title: 'Garansi Bug Perbaikan',
      description: 'Garansi perbaikan bug gratis selama 7 hari setelah final delivery. Bug diluar periode tersebut akan dikenakan biaya support.',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Pembayaran Tahap Akhir',
      description: 'Pembayaran 60% sisanya harus dilunasi sebelum file final dan access website diserahkan kepada client.',
      accent: true,
    },
    {
      icon: <FileText size={24} />,
      title: 'Persiapan Bahan Client',
      description: 'Client wajib menyediakan semua bahan produksi (teks, gambar, logo, brand guideline) sebelum fase produksi dimulai untuk kelancaran timeline.',
    },
  ];

  return (
    <section id="terms" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            Syarat & Ketentuan
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami percaya pada transparansi dan kejelasan dalam setiap proyek. Berikut adalah ketentuan kerja yang berlaku untuk semua layanan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {terms.map((term, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-full p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                  term.accent
                    ? 'bg-red-50 border-red-600 hover:border-red-700'
                    : 'bg-gray-50 border-gray-200 hover:border-red-600'
                }`}
              >
                <div
                  className={`mb-4 ${
                    term.accent ? 'text-red-600' : 'text-black'
                  }`}
                >
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {term.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {term.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-black text-white p-8 rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-red-600">
                <span className="text-white text-sm font-bold">!</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Catatan Penting</h3>
              <p className="text-gray-300 leading-relaxed">
                Semua ketentuan di atas berlaku untuk kontrak project yang telah disepakati. Perubahan kesepakatan harus dilakukan secara tertulis dan ditandatangani oleh kedua belah pihak. Kami berkomitmen untuk memberikan hasil berkualitas tinggi dengan komunikasi yang jelas dan transparan sepanjang proses pengerjaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
