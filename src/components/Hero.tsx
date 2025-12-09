import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Neon Red Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600 rounded-full blur-[50px] opacity-35 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Faction Visual
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12">
            Digital Creative Studio
          </p>
          <button
            onClick={scrollToContact}
            className="group bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
