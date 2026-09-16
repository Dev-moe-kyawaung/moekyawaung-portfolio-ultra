import { useEffect, useRef } from "react";

const CHARS = "01AZXYQPOIMN87532*#<>[]{}";

export default function MatrixOverlay({ canvasId }) {
  const rafRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function draw() {
      ctx.fillStyle = "rgba(5, 5, 8, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (Math.random() < 0.03) {
          ctx.fillStyle = "rgba(124, 92, 255, 0.95)";
        } else {
          ctx.fillStyle = "rgba(0, 229, 255, 0.55)";
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [canvasId]);

  return null;
}
