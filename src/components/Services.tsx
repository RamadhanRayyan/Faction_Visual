import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  Briefcase,
  ArrowRight,
  Globe,
  Image,
  Play,
  MessageSquare,
  Layout,
  PlayCircle,
  GraduationCapIcon,
  BookOpenIcon,
  X,
  PlaySquareIcon,
} from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Building2 size={48} />,
      title: 'Website Company Profile',
      subtitle: 'Representasi Digital Profesional Bisnis Anda',
      description:
        'Faction Visual menyediakan layanan pembuatan website company profile yang profesional, informatif, dan menjadi representasi resmi perusahaan, organisasi, atau brand Anda. Website yang kami buat dirancang untuk membangun kepercayaan, memperkuat branding, dan memberikan informasi bisnis Anda dengan cara yang paling efektif.',
      features: [
        {
          icon: <Layout size={20} />,
          text: 'Desain premium dan responsif di semua perangkat',
        },
        {
          icon: <Globe size={20} />,
          text: 'Informasi perusahaan tersusun jelas dan terstruktur',
        },
        {
          icon: <Image size={20} />,
          text: 'Halaman produk/jasa dengan presentasi visual optimal',
        },
        {
          icon: <Play size={20} />,
          text: 'Galeri foto dan video profesional',
        },
        {
          icon: <MessageSquare size={20} />,
          text: 'Kontak dan CTA yang memudahkan client menghubungi',
        },
      ],
    },
    {
      icon: <Briefcase size={48} />,
      title: 'Website Portfolio',
      subtitle: 'Showcase Karya Terbaik Anda',
      description:
        'Faction Visual menghadirkan solusi website portfolio profesional untuk desainer, fotografer, freelancer, dan pekerja kreatif lainnya. Website portofolio kami dirancang dengan estetika modern dan fungsionalitas tinggi untuk memaksimalkan presentasi visual karya Anda dan membuat kesan profesional yang lasting.',
      features: [
        {
          icon: <Layout size={20} />,
          text: 'Showcase proyek dalam grid modern yang menarik',
        },
        {
          icon: <Play size={20} />,
          text: 'Animasi halus dan transisi yang engaging',
        },
        {
          icon: <Image size={20} />,
          text: 'Integrasi media lengkap: foto, video, embed konten',
        },
        {
          icon: <Globe size={20} />,
          text: 'Halaman About yang menceritakan kisah dan background Anda',
        },
        {
          icon: <MessageSquare size={20} />,
          text: 'Contact form eksklusif untuk inquiry dari client potensial',
        },
      ],
    },
    {
      icon: <PlaySquareIcon size={48} />,
      title: 'Website Landing Page',
      subtitle: 'Representasi Digital yang efektif',
      description:
        'Faction Visual menyediakan layanan pembuatan website landing page yang efektif, informatif, dan menjadi representasi yang super efektif. Website yang kami buat dirancang untuk membangun kepercayaan, memperkuat branding, dan memberikan informasi bisnis Anda dengan cara yang paling efektif.',
      features: [
        {
          icon: <Layout size={20} />,
          text: 'Hook yang menarik dan efektif',
        },
        {
          icon: <Globe size={20} />,
          text: 'Informasi bisnis yang jelas dan terstruktur',
        },
        {
          icon: <Image size={20} />,
          text: 'Presentasi visual yang efektif',
        },
        {
          icon: <Play size={20} />,
          text: 'Animasi halus dan transisi',
        },
        {
          icon: <MessageSquare size={20} />,
          text: 'CTA yang memudahkan client menghubungi',
        },
      ],
    },
    {
  icon: <GraduationCapIcon size={48} />,
  title: 'Website Educational / E-Learning',
  subtitle: 'Platform Pembelajaran Digital yang Terstruktur',
  description:
    'Faction Visual menyediakan layanan pembuatan website educational dan e-learning yang modern, terstruktur, dan mudah digunakan. Website dirancang untuk mendukung proses belajar mengajar secara efektif, menyajikan materi dengan jelas, serta memberikan pengalaman belajar yang interaktif dan profesional bagi siswa maupun pengajar.',
  features: [
    {
      icon: <BookOpenIcon size={20} />,
      text: 'Penyajian materi pembelajaran yang rapi dan sistematis',
    },
    {
      icon: <Layout size={20} />,
      text: 'Dashboard user-friendly untuk siswa dan pengajar',
    },
    {
      icon: <Play size={20} />,
      text: 'Dukungan video, modul, dan konten interaktif',
    },
    {
      icon: <PlayCircle size={20} />,
      text: 'Sistem evaluasi, kuis, dan progres belajar',
    },
    {
      icon: <MessageSquare size={20} />,
      text: 'Manajemen kelas dan interaksi siswa–pengajar',
    },
  ],
}

  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Layanan Kami</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dua layanan yang siap membangun dan mengembangkan branding digital Anda
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                onClick={() => setSelectedService(index)}
                className="bg-white border-2 border-gray-900 p-3 md:p-8 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col cursor-pointer md:cursor-default"
              >
                <div className="text-red-600 mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 origin-left scale-75 md:scale-100">
                  {service.icon}
                </div>

                <h3 className="text-xs md:text-3xl font-bold text-black mb-0 md:mb-2 leading-tight text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-[10px] text-gray-400 mt-2 md:hidden text-center italic">
                  Klik untuk selengkapnya
                </p>
                <div className="hidden md:block">
                  <p className="text-red-600 text-sm font-semibold mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-4 group/item"
                      >
                        <div className="flex-shrink-0 mt-1 text-red-600 group-hover/item:scale-125 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/6287731213462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-bold inline-flex items-center space-x-2 hover:space-x-3 transition-all duration-300 text-lg group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Mobile */}
        {selectedService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 md:hidden backdrop-blur-sm">
            <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl p-6 relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-red-600 mb-4">
                {services[selectedService].icon}
              </div>

              <h3 className="text-2xl font-bold text-black mb-2">
                {services[selectedService].title}
              </h3>
              
              <p className="text-red-600 text-sm font-semibold mb-4">
                {services[selectedService].subtitle}
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {services[selectedService].description}
              </p>

              <div className="space-y-4 mb-8">
                {services[selectedService].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 text-red-600">
                      {feature.icon}
                    </div>
                    <p className="text-gray-700 text-sm">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/6287731213462"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors"
              >
                <span>Hubungi Kami</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
