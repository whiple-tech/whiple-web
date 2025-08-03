import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const WhiplePlaceholder = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const copyEmailToClipboard = () => {
    const email = 'k.greschnow@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setShowCopiedPopup(true);
      setTimeout(() => setShowCopiedPopup(false), 2000);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Particle[] = [];
    const maxDistance = 150;
    const numParticles = 250;

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(51, 51, 51, 0.6)';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(68, 68, 68, ${0.3 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">

        {/* Animated Logo */}
        <div className="mb-12 animate-fadeInUp">
          <div className="flex items-center justify-center mb-4">
            {/* Logo text */}
            <div className="flex items-center">
              <span
                className="font-bold tracking-tight whiple-logo-text"
                style={{ color: '#FF6B35', marginRight: '0.1em', fontSize: '72px' }}
              >
                WHIPLE
              </span>
              <span
                className="whiple-logo-tech"
                style={{ color: '#e8e8e8', fontWeight: 300, fontFamily: "'Nunito', Arial, Helvetica, sans-serif", fontSize: '72px' }}
              >
                .tech
              </span>
            </div>

            {/* Orange block */}
            <div
              className="w-8 h-16 animate-pulse"
              style={{ backgroundColor: '#FF6B35' }}
            />
          </div>
        </div>

        {/* Main message */}
        <div className="mb-8 animate-fadeInUp animation-delay-300 flex flex-col items-center text-center">
          <p className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Stay tuned as we're crafting something special.
          </p>
          <p className="text-sm md:text-md text-gray-400 max-w-2xl leading-relaxed">
            Reach out for personalized solutions that will transform how you work.
          </p>
        </div>

        {/* Optional contact info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp animation-delay-900">
          {/* Copy success popup - positioned relative to email */}
          <div
            className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-50 text-white px-3 py-1 rounded-md shadow-lg transition-all duration-300 ease-in-out whitespace-nowrap ${showCopiedPopup ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
              }`}
            style={{ backgroundColor: '#FF6B25', color: '#e8e8e8', fontSize: '12px' }}
          >
            Email copied to clipboard!
          </div>

          <p className="text-gray-400 text-sm">
            Contact us via{' '}
            <span
              style={{ color: '#F28C38', cursor: 'pointer' }}
              onClick={copyEmailToClipboard}
              className="hover:underline"
            >
              k.greschnow@gmail.com
            </span>
          </p>
        </div>
      </div>

      {/* Google Fonts import for Poppins 900 and Nunito 300 */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Nunito:wght@300&display=swap"
        rel="stylesheet"
      />

      {/* Custom animations and font styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }

        /* Apply Poppins 900 to logo text */
        .whiple-logo-text {
          font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
          font-weight: 900 !important;
          font-style: italic !important;
          letter-spacing: 0.1em !important;
        }
        
        /* Apply Nunito 300 to .tech */
        .whiple-logo-tech {
          font-family: 'Nunito', Arial, Helvetica, sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: 0.1em !important;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .text-6xl {
            font-size: 3rem;
          }
          .text-8xl {
            font-size: 4.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default WhiplePlaceholder;