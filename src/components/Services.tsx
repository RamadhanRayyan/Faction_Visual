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
} from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Layanan Kami</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dua layanan utama untuk membangun dan mengembangkan kehadiran digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
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
              <div className="bg-white border-2 border-gray-900 p-8 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-red-600 text-sm font-semibold mb-4">
                  {service.subtitle}
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed flex-grow">
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
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
