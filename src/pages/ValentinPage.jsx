import React, { useState, useEffect } from "react";
import { Heart, Mail, X, Stars, Music, Gift } from "lucide-react";

const ValentinePage = () => {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    "https://i.imgur.com/Cf3ixQq.jpg",
    "https://i.imgur.com/N2HRTVv.jpg",
    "https://i.imgur.com/gC57G1s.jpg",
    "https://i.imgur.com/MtRCSGu.jpg"
  ];

  const memories = [
    "Tu sonrisa ilumina mi mundo ✨",
    "Cada momento contigo es mágico 🌟",
    "Nuestras aventuras juntos son mi mayor tesoro 🗺️",
    "El día que nos conocimos, supe que eras especial 💫"
  ];

  useEffect(() => {
    if (opened) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-red-100 p-4 overflow-hidden">
      {/* Animated Background Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`bg-heart-${i}`}
            className="absolute animate-float-background"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.05,
              transform: `scale(${Math.random() * 2 + 1})`
            }}
          >
            <Heart 
              size={48} 
              className="text-red-500"
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Floating hearts overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          >
            <Heart 
              size={Math.random() * 24 + 12} 
              className="text-red-400"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
                filter: 'drop-shadow(0 0 3px rgba(255,182,193,0.7))'
              }}
            />
          </div>
        ))}
      </div>

      {!opened ? (
        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-10 text-center max-w-md relative border-2 border-pink-300">
            <div className="absolute -top-4 -left-4">
              <Stars size={36} className="text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <Gift size={36} className="text-red-400 animate-bounce" />
            </div>
            <Mail size={72} className="text-red-500 mx-auto hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
              Mi Amor Eterno 💝
            </h2>
            <p className="mt-4 text-gray-600 text-lg font-medium">
              He preparado algo especial que expresa todo lo que siento por ti... 
              ¿Me concedes el honor de compartirlo contigo? 🌹
            </p>
            <button
              onClick={handleOpen}
              className="mt-6 px-10 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Abrir Con Todo Mi Amor ✨
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-4xl">
          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 text-center border-2 border-pink-300">
            <button
              onClick={() => setOpened(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Fixed photo gallery */}
            <div className="relative w-full mb-8 rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>
              <img
                src={photos[currentPhotoIndex]}
                alt={memories[currentPhotoIndex]}
                className="w-full h-full object-contain bg-black/10"
                style={{ maxHeight: '600px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  {memories[currentPhotoIndex]}
                </p>
              </div>
            </div>

            <div className="relative mb-8">
              <Heart size={80} className="text-red-500 mx-auto animate-heartbeat" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <Heart size={80} className="text-pink-400 mx-auto animate-ping opacity-50" />
              </div>
            </div>

            <h2 className="text-5xl font-bold mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
              ¡Feliz Día de San Valentín, Mi Vida! 💖
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-gray-600 text-xl leading-relaxed">
                Cada latido de mi corazón lleva tu nombre, cada sonrisa mía es un reflejo de tu amor.
                Eres el sueño que nunca supe que tenía hasta que te encontré. Tu amor transforma
                los días ordinarios en momentos mágicos, y tu presencia hace que mi mundo brille
                con una luz especial.
              </p>
              
              <p className="text-gray-600 text-xl leading-relaxed">
                Contigo, cada momento se convierte en un recuerdo precioso, cada risa en una melodía
                que guardo en mi corazón. Eres mi presente, mi futuro, y el amor más hermoso que
                la vida me ha regalado. Gracias por ser tú, por ser mía, por ser perfecta.
              </p>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl border border-pink-200 shadow-inner">
              <Music size={32} className="text-red-400 mx-auto mb-4" />
              <p className="text-gray-700 font-semibold text-2xl">
                Te amo más allá de las palabras, más allá del tiempo,
                más allá de todo lo imaginable ❤️
              </p>
              <p className="text-3xl font-bold text-gray-800 mt-4 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
                Miguel
              </p>
            </div>
          </div>

          {showConfetti && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-confetti"
                  style={{
                    left: `${Math.random() * 600 - 300}px`,
                    animationDelay: `${Math.random() * 2}s`,
                    backgroundColor: [
                      '#ff0080', '#ff4d94', '#ff99c2', '#ffb3d1', 
                      '#ffd700', '#ff6b6b', '#ff85a2', '#ffa07a',
                      '#ff1493', '#ff69b4'
                    ][Math.floor(Math.random() * 10)]
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-25px) rotate(8deg);
    }
  }

  @keyframes float-background {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-100px) rotate(15deg);
    }
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
  }

  @keyframes confetti {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      width: 8px;
      height: 24px;
    }
    100% {
      transform: translateY(400px) rotate(960deg);
      opacity: 0;
      width: 8px;
      height: 24px;
    }
  }

  .animate-float {
    animation: float 7s ease-in-out infinite;
  }

  .animate-float-background {
    animation: float-background 15s ease-in-out infinite;
  }

  .animate-heartbeat {
    animation: heartbeat 2s ease-in-out infinite;
  }

  .animate-confetti {
    position: absolute;
    width: 8px;
    height: 24px;
    animation: confetti 4s ease-out forwards;
  }
`;

export default ValentinePage;