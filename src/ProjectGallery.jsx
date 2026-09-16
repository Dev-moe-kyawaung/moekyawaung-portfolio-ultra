import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "MoekyawTranslator",
    desc:
      "AI‑powered translation app supporting 8 languages with Myanmar first, using Kotlin, Jetpack Compose, Claude API, and Firebase.",
    tags: ["Android", "Kotlin", "Compose", "AI/ML", "Firebase"],
  },
  {
    id: 2,
    title: "PulseSync",
    desc:
      "Real‑time sync platform demonstrating Clean Architecture, multi‑module design, offline‑first patterns, and full CI/CD.",
    tags: ["Android", "Clean Arch", "Firebase", "CI/CD"],
  },
  {
    id: 3,
    title: "Developer Portfolio Ultra",
    desc:
      "Premium quantum‑themed portfolio with particle systems, matrix overlays, and kinetic typography.",
    tags: ["React", "Three.js", "Framer Motion"],
  },
  {
    id: 4,
    title: "Android Architecture Kit",
    desc:
      "Reusable modular architecture templates for clean, testable Android apps with modern tooling.",
    tags: ["Android", "Kotlin", "Architecture"],
  },
];

function FractalBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "repeating-radial-gradient(circle at 50% 50%, rgba(124,92,255,0.06) 0, rgba(124,92,255,0.06) 1px, transparent 2px, transparent 12px), repeating-linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px, 60px 60px",
        animation: "fractalShift 18s linear infinite",
        opacity: 0.35,
        pointerEvents: "none",
      }}
    />
  );
}

export default function ProjectGallery() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [cardRects, setCardRects] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const transforms = [y1, y2, y3, y1];

  useEffect(() => {
    function updateRects() {
      if (!containerRef.current || !canvasRef.current) return;
      const cards = containerRef.current.querySelectorAll(".project-card");
      const containerRect = containerRef.current.getBoundingClientRect();
      const rects = Array.from(cards).map((card) => {
        const r = card.getBoundingClientRect();
        return {
          x: r.left - containerRect.left + r.width / 2,
          y: r.top - containerRect.top + r.height / 2,
        };
      });
      setCardRects(rects);
    }

    updateRects();
    window.addEventListener("resize", updateRects);
    window.addEventListener("scroll", updateRects, { passive: true });

    const id = setInterval(updateRects, 200);
    return () => {
      window.removeEventListener("resize", updateRects);
      window.removeEventListener("scroll", updateRects);
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (cardRects.length < 2) {
        requestAnimationFrame(draw);
        return;
      }

      ctx.lineWidth = 1.2;

      for (let i = 0; i < cardRects.length - 1; i++) {
        const a = cardRects[i];
        const b = cardRects[i + 1];

        const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        gradient.addColorStop(0, "rgba(124,92,255,0.0)");
        gradient.addColorStop(0.5, "rgba(0,229,255,0.35)");
        gradient.addColorStop(1, "rgba(124,92,255,0.0)");

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }

    const id = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
    };
  }, [cardRects]);

  return (
    <section className="section projects-section" id="projects">
      <div className="content-layer container">
        <h2 className="projects-title kinetic-title">Selected Projects</h2>

        <div className="gallery" ref={containerRef}>
          <div className="gallery-inner" style={{ position: "relative" }}>
            <canvas id="connections-canvas" ref={canvasRef} />
            <FractalBackground />

            <div className="project-grid">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={p.id}
                  className="project-card"
                  style={{ y: transforms[i % transforms.length] }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="project-title kinetic-subtitle">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
