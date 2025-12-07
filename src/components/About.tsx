import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-black mb-6">Tentang Kami</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-black">Faction Visual</span> adalah studio kreatif digital yang berfokus pada pembuatan website berkualitas tinggi.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami menyediakan layanan profesional untuk pembuatan website company profile yang menampilkan identitas bisnis Anda secara elegan, serta website portfolio yang mempresentasikan karya-karya terbaik Anda dengan desain modern dan responsif.
          </p>
        </div>
      </div>
    </section>
  );
}
