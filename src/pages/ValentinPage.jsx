import React, { useState, useEffect } from "react";
import { Heart, Mail, X, Stars, Camera } from "lucide-react";

const ValentinePage = () => {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    "https://i.imgur.com/8jBk1au.jpg",  // Reemplazar con: "primera-foto.jpg"
    "https://i.imgur.com/aUlDILU.jpg",  // Reemplazar con: "segunda-foto.jpg"
    "https://i.imgur.com/QyHpPxX.png",  // Reemplazar con: "tercera-foto.jpg"
    "https://i.imgur.com/ItKvgoC.jpg",  // Reemplazar con: "cuarta-foto.jpg"
  ];

  useEffect(() => {
    if (opened) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const memories = [
    "Nuestro primer beso 💋",
    "Aquella cena especial 🍝",
    "Nuestro viaje juntos ✈️",
    "Un día perfecto contigo 🌅"
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-pink-200 p-4">
      {/* Corazones flotantes con brillo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          >
            <Heart 
              size={Math.random() * 20 + 10} 
              className="text-red-400"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
                filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))'
              }}
            />
          </div>
        ))}
      </div>

      {!opened ? (
        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-center max-w-md relative border-2 border-pink-300">
            <div className="absolute -top-4 -left-4">
              <Stars size={32} className="text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <Stars size={32} className="text-yellow-400 animate-pulse" />
            </div>
            <Mail size={64} className="text-red-500 mx-auto hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold mt-6 text-gray-700">
              Mi Princesa Hermosa 👑
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Preparé algo muy especial para ti... ¿Te gustaría verlo? 💝
            </p>
            <button
              onClick={handleOpen}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Abrir Con Amor ✨
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 text-center max-w-2xl border-2 border-pink-300">
            <button
              onClick={() => setOpened(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Galería de fotos con transición suave */}
            <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
              <img
                src={photos[currentPhotoIndex]}
                alt={memories[currentPhotoIndex]}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-lg font-semibold">
                  {memories[currentPhotoIndex]}
                </p>
              </div>
            </div>

            <div className="relative mb-8">
              <Heart size={64} className="text-red-500 mx-auto animate-heartbeat" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <Heart size={64} className="text-red-500 mx-auto animate-ping opacity-50" />
              </div>
            </div>

            <h2 className="text-4xl font-bold mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
              ¡Feliz San Valentín, Mi Amor! 💖
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Cada mañana despierto agradecido por tenerte en mi vida. Tu sonrisa ilumina mis días,
                tu amor me hace mejor persona, y tu presencia llena mi mundo de colores. Eres mi 
                inspiración, mi compañera, mi mejor amiga y el amor de mi vida.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Juntos hemos creado tantos momentos especiales, y cada día contigo es una nueva
                aventura que me hace más feliz. No puedo imaginar mi vida sin ti, mi amor.
              </p>
            </div>

            <div className="mt-8 p-6 bg-pink-50 rounded-xl border border-pink-200 shadow-inner">
              <p className="text-gray-700 font-semibold text-xl">
                Te amo infinitamente ❤️
              </p>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                Miguel
              </p>
            </div>
          </div>

          {/* Efecto de confeti mejorado */}
          {showConfetti && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-confetti"
                  style={{
                    left: `${Math.random() * 400 - 200}px`,
                    animationDelay: `${Math.random() * 1}s`,
                    backgroundColor: [
                      '#ff0080', '#ff4d94', '#ff99c2', '#ffb3d1', 
                      '#ffd700', '#ff6b6b', '#ff85a2', '#ffa07a'
                    ][Math.floor(Math.random() * 8)]
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

// Estilos mejorados
const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes confetti {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      width: 6px;
      height: 20px;
    }
    100% {
      transform: translateY(300px) rotate(720deg);
      opacity: 0;
      width: 6px;
      height: 20px;
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  .animate-confetti {
    position: absolute;
    width: 6px;
    height: 20px;
    animation: confetti 3s ease-out forwards;
  }
`;

export default ValentinePage;