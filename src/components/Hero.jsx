import { ChevronDown } from 'lucide-react'

const Hero = ({ language }) => {
  const translations = {
    ru: {
      headline: 'Maxim Coffee 3 в 1',
      subtitle: 'настоящий вкус корейского кофе',
      cta: 'Купить сейчас',
    },
    uz: {
      headline: 'Maxim Coffee 3 in 1',
      subtitle: 'haqiqiy koreys qahvasi',
      cta: 'Hozir sotib olish',
    },
  }

  const t = translations[language]

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-maxim-yellow flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      {/* Steam wave overlay */}
      <div className="absolute top-0 left-0 w-full h-64 pointer-events-none">
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="steam-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="40"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z"
            fill="rgba(255,255,255,0.3)"
            filter="url(#steam-filter)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className="text-center md:text-left">
          <div className="mb-6 md:mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-maxim-dark mb-4">
              {t.headline}
            </h1>
            <p className="text-xl md:text-2xl text-maxim-brown font-semibold mb-8">
              {t.subtitle}
            </p>
          </div>

          <button className="bg-maxim-dark hover:bg-maxim-brown text-white font-bold py-4 px-8 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
            {t.cta}
          </button>
        </div>

        {/* Right side - Product Image Placeholder */}
        <div className="flex justify-center items-center animate-float">
          <div className="relative w-80 h-96 bg-maxim-cream rounded-3xl shadow-2xl flex items-center justify-center border-4 border-maxim-brown/10 overflow-hidden">
            {/* Yellow box effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-maxim-yellow to-yellow-300 opacity-30"></div>
            {/* Product box representation */}
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-4">☕</div>
              <p className="text-maxim-dark font-bold text-xl mb-2">MAXIM</p>
              <p className="text-maxim-brown text-sm">3 in 1 Coffee</p>
              <div className="mt-6 flex justify-center gap-2">
                <div className="w-2 h-16 bg-maxim-brown rounded-full"></div>
                <div className="w-2 h-16 bg-maxim-brown rounded-full"></div>
                <div className="w-2 h-16 bg-maxim-brown rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-maxim-dark z-20"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default Hero
