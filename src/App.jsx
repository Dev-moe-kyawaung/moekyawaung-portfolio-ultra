import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import ParticlesField from "./ParticlesField";
import MatrixOverlay from "./MatrixOverlay";
import ProjectGallery from "./ProjectGallery";
import { LANG, CONTENT } from "./i18n";

function Nav({ lang, setLang, t }) {
  return (
    <nav className="nav">
      <div className="nav-brand">{t.nav.brand}</div>
      <div className="nav-links">
        <a href="#about">{t.nav.about}</a>
        <a href="#expertise">{t.nav.expertise}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#github-certs">{t.nav.githubCerts}</a>
        <a href="#contact">{t.nav.contact}</a>
        <button
          onClick={() => setLang(lang === LANG.EN ? LANG.MY : LANG.EN)}
          className="cta-button secondary"
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          {lang === LANG.EN ? t.toggle.my : t.toggle.en}
        </button>
      </div>
    </nav>
  );
}

function Hero({ t }) {
  return (
    <section className="section hero" id="home">
      <div className="content-layer container">
        <motion.h1
          className="kinetic-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        >
          {t.hero.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <a href="#projects" className="cta-button">
            {t.hero.ctaViewWork}
          </a>
          <a href="#contact" className="cta-button secondary">
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="content-layer container">
        <div className="about-card">
          <h2 className="kinetic-subtitle">{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}

function ProfessionalSummary({ t }) {
  return (
    <section className="section" id="professional-summary">
      <div className="content-layer container">
        <div className="about-card">
          <h2 className="kinetic-subtitle">{t.professionalSummary.title}</h2>
          <ul
            style={{
              paddingLeft: "1.1rem",
              color: "var(--text-dim)",
              lineHeight: "1.7",
            }}
          >
            {t.professionalSummary.bullets.map((b, i) => (
              <li key={i} style={{ marginBottom: "0.5rem" }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Expertise({ t }) {
  return (
    <section className="section stack-section" id="expertise">
      <div className="content-layer container">
        <h2 className="kinetic-title" style={{ fontSize: "2rem" }}>
          {t.expertise.title}
        </h2>

        <div className="stack-grid">
          {t.expertise.sections.map((sec) => (
            <div key={sec.title} className="stack-card">
              <h3>{sec.title}</h3>
              <ul className="stack-list">
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubCerts({ t }) {
  return (
    <section className="section github-certs-section" id="github-certs">
      <div className="content-layer container">
        <h2 className="kinetic-title" style={{ fontSize: "2rem" }}>
          {t.githubCerts.title}
        </h2>

        <div className="two-col">
          <div className="info-card">
            <h3>{t.githubCerts.github.title}</h3>
            <p>{t.githubCerts.github.p}</p>
            <ul>
              {t.githubCerts.github.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>{t.githubCerts.certs.title}</h3>
            <ul>
              {t.githubCerts.certs.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="section" id="contact">
      <div className="content-layer container">
        <div className="contact-card">
          <h2 className="kinetic-subtitle">{t.contact.title}</h2>
          <p>{t.contact.p}</p>

          <div className="contact-links">
            <a href="mailto:moekyawaung@asia.com">{t.contact.links.email}</a>
            <a
              href="https://github.com/Dev-moe-kyawaung"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.links.github}
            </a>
            <a
              href="https://www.tumblr.com/moekyawaung"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.links.tumblr}
            </a>
            <a
              href="https://moekyawaung2026.strikingly.com"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.links.strikingly}
            </a>
            <a
              href="https://moekyawaung.slack.com"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.links.slack}
            </a>
            <a
              href="https://bsky.app/profile/@moekyawaung96.bsky.social"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.links.bluesky}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState(LANG.EN);
  const t = CONTENT[lang];

  return (
    <>
      <div id="particles-container">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 55 }}
          style={{ width: "100%", height: "100%" }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#050508"]} />
          <Stars radius={120} depth={60} count={2500} factor={3} saturation={0} fade speed={1} />
          <ParticlesField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Canvas>
      </div>

      <canvas id="matrix-canvas" />
      <MatrixOverlay canvasId="matrix-canvas" />

      <Nav lang={lang} setLang={setLang} t={t} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <ProfessionalSummary t={t} />
        <Expertise t={t} />
        <ProjectGallery />
        <GitHubCerts t={t} />
        <Contact t={t} />
      </main>
    </>
  );
}
