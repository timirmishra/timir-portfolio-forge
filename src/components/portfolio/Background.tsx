
import { useEffect, useRef } from 'react';

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'shard' | 'circuit' | 'dot';
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const glassShards: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Create electronic particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        type: Math.random() > 0.7 ? 'circuit' : Math.random() > 0.5 ? 'shard' : 'dot',
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      });
    }

    // Create floating glass shards
    for (let i = 0; i < 15; i++) {
      glassShards.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 40 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1,
      });
    }

    const drawCircuit = (x: number, y: number, size: number, opacity: number) => {
      ctx.strokeStyle = `hsla(217, 91%, 60%, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Draw circuit-like pattern
      ctx.moveTo(x - size, y);
      ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size);
      ctx.lineTo(x, y + size);
      // Add small squares at ends
      ctx.rect(x - size - 2, y - 2, 4, 4);
      ctx.rect(x + size - 2, y - 2, 4, 4);
      ctx.stroke();
    };

    const drawShard = (x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const gradient = ctx.createLinearGradient(-size, -size, size, size);
      gradient.addColorStop(0, `hsla(217, 91%, 60%, ${opacity * 0.8})`);
      gradient.addColorStop(0.5, `hsla(210, 40%, 98%, ${opacity * 0.3})`);
      gradient.addColorStop(1, `hsla(217, 91%, 60%, ${opacity * 0.1})`);
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = `hsla(217, 91%, 60%, ${opacity})`;
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.moveTo(-size * 0.5, -size);
      ctx.lineTo(size * 0.8, -size * 0.3);
      ctx.lineTo(size * 0.3, size * 0.7);
      ctx.lineTo(-size * 0.7, size * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      ctx.restore();
    };

    const drawGlassShard = (x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, `hsla(217, 91%, 60%, ${opacity * 0.4})`);
      gradient.addColorStop(0.7, `hsla(210, 40%, 98%, ${opacity * 0.2})`);
      gradient.addColorStop(1, `hsla(217, 91%, 60%, ${opacity * 0.05})`);
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = `hsla(217, 91%, 60%, ${opacity * 0.6})`;
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(-size * 0.6, -size * 0.8);
      ctx.lineTo(size * 0.7, -size * 0.2);
      ctx.lineTo(size * 0.4, size * 0.9);
      ctx.lineTo(-size * 0.3, size * 0.6);
      ctx.lineTo(-size * 0.9, size * 0.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Add glass reflection effect
      ctx.strokeStyle = `hsla(210, 40%, 98%, ${opacity * 0.8})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size * 0.4, -size * 0.6);
      ctx.lineTo(size * 0.2, -size * 0.4);
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw electronic particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Draw based on type
        if (particle.type === 'circuit') {
          drawCircuit(particle.x, particle.y, particle.size, particle.opacity);
        } else if (particle.type === 'shard') {
          drawShard(particle.x, particle.y, particle.size, particle.opacity, particle.rotation);
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(217, 91%, 60%, ${particle.opacity})`;
          ctx.fill();
        }
      });

      // Update and draw glass shards
      glassShards.forEach((shard) => {
        shard.x += shard.vx;
        shard.y += shard.vy;
        shard.rotation += shard.rotationSpeed;

        // Wrap around edges
        if (shard.x < -50) shard.x = canvas.width + 50;
        if (shard.x > canvas.width + 50) shard.x = -50;
        if (shard.y < -50) shard.y = canvas.height + 50;
        if (shard.y > canvas.height + 50) shard.y = -50;

        drawGlassShard(shard.x, shard.y, shard.size, shard.opacity, shard.rotation);
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.1 * (1 - distance / 120);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(217, 91%, 60%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
