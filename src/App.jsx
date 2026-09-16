import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import ParticlesField from "./ParticlesField";
import MatrixOverlay from "./MatrixOverlay";
import ProjectGallery from "./ProjectGallery";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">MOE KYAW AUNG</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#projects">Projects</a>
        <a href="#github-certs">GitHub & Certs</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="content-layer container">
        <motion.h1
          className="kinetic-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Senior Android & Full‑Stack Engineer
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          Kotlin · Jetpack Compose · AI/ML · Cybersecurity. Building scalable
          mobile systems and AI‑powered apps from Myanmar to the world.
        </motion.p>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        >
          <span className="tag">Android</span>
          <span className="tag">Kotlin</span>
          <span className="tag">Jetpack Compose</span>
          <span className="tag">Firebase</span>
          <span className="tag">AI/ML</span>
          <span className="tag">Cybersecurity</span>
          <span className="tag">CI/CD</span>
        </motion.div>

        <motion.div
          className="cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <a href="#projects" className="cta-button">
            View Work
          </a>
          <a href="#contact" className="cta-button secondary">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="content-layer container">
        <div className="about-card">
          <h2 className="kinetic-subtitle">About</h2>
          <p>
            I’m Moe Kyaw Aung, a senior Android and full‑stack engineer based in
            Tachileik, Myanmar 🇲🇲, working with teams across Southeast Asia.
          </p>
          <p>
            I specialize in Kotlin, Jetpack Compose, Clean Architecture, and
            Firebase, with deep interest in AI/ML on device, cybersecurity, and
            developer tooling.
          </p>
          <p>
            My goal is to build world‑class products that bridge Myanmar and
            global tech ecosystems—code with culture, build with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section stack-section" id="expertise">
      <div className="content-layer container">
        <h2 className="kinetic-title" style={{ fontSize: "2rem" }}>
          Expertise
        </h2>

        <div className="stack-grid">
          <div className="stack-card">
            <h3>Android / Mobile</h3>
            <ul className="stack-list">
              <li>Kotlin, Coroutines, Flow</li>
              <li>Jetpack Compose, ViewModel, Navigation</li>
              <li>Room, Paging, DataStore</li>
              <li>Material 3, Custom Design Systems</li>
            </ul>
          </div>

          <div className="stack-card">
            <h3>Architecture</h3>
            <ul className="stack-list">
              <li>Clean Architecture</li>
              <li>MVVM / MVI</li>
              <li>Multi‑module apps</li>
              <li>SOLID, OOP, Testing strategies</li>
            </ul>
          </div>

          <div className="stack-card">
            <h3>Backend & Cloud</h3>
            <ul className="stack-list">
              <li>Firebase (Auth, Firestore, FCM)</li>
              <li>REST APIs, Retrofit, OkHttp</li>
              <li>Basic Python backends</li>
              <li>CI/CD with GitHub Actions, Azure DevOps</li>
            </ul>
          </div>

          <div className="stack-card">
            <h3>AI / ML</h3>
            <ul className="stack-list">
              <li>Claude API integration</li>
              <li>TFLite, on‑device ML</li>
              <li>AI translation & assistants</li>
              <li>Data pipelines for ML features</li>
            </ul>
          </div>

          <div className="stack-card">
            <h3>Cybersecurity</h3>
            <ul className="stack-list">
              <li>Ethical hacking fundamentals</li>
              <li>Secure storage & networking</li>
              <li>Threat modeling for mobile apps</li>
              <li>Security‑first coding practices</li>
            </ul>
          </div>

          <div className="stack-card">
            <h3>Dev Tools</h3>
            <ul className="stack-list">
              <li>Git, GitHub, GitLab</li>
              <li>Fastlane, Gradle, Kotlin DSL</li>
              <li>Jira, Agile/Scrum</li>
              <li>Performance profiling & debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubCerts() {
  return (
    <section className="section github-certs-section" id="github-certs">
      <div className="content-layer container">
        <h2 className="kinetic-title" style={{ fontSize: "2rem" }}>
          GitHub & Certifications
        </h2>

        <div className="two-col">
          <div className="info-card">
            <h3>GitHub</h3>
            <p>
              I build open‑source tools, sample architectures, and experimental
              apps focused on Android, AI, and developer productivity.
            </p>
            <ul>
              <li>
                Profile:{" "}
                <a
                  href="https://github.com/Dev-moe-kyawaung"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Dev-moe-kyawaung
                </a>
              </li>
              <li>Flagship repos: MoekyawTranslator, PulseSync, portfolio apps</li>
              <li>CI/CD with GitHub Actions, reusable workflows</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Certifications & Achievements</h3>
            <ul>
              <li>40+ certifications across Android, Kotlin, Firebase, ML</li>
              <li>Google Developers Launchpad participant</li>
              <li>Firebase Associate Developer</li>
              <li>Git & GitHub Professional Certificate</li>
              <li>Security & ethical hacking training</li>
              <li>AI/ML self‑directed R&D (Claude API, TFLite)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="content-layer container">
        <div className="contact-card">
          <h2 className="kinetic-subtitle">Contact</h2>
          <p>
            I’m open to senior Android roles, full‑stack opportunities, and
            collaborations on AI/ML and security‑focused mobile products.
          </p>

          <div className="contact-links">
            <a href="mailto:moekyawaung@asia.com">Email</a>
            <a
              href="https://github.com/Dev-moe-kyawaung"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="https://www.tumblr.com/moekyawaung" target="_blank" rel="noreferrer">
              Tumblr
            </a>
            <a href="https://moekyawaung2026.strikingly.com" target="_blank" rel="noreferrer">
              Strikingly
            </a>
            <a href="https://moekyawaung.slack.com" target="_blank" rel="noreferrer">
              Slack
            </a>
            <a href="https://bsky.app/profile/@moekyawaung96.bsky.social" target="_blank" rel="noreferrer">
              Bluesky
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
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

      <Nav />

      <main>
        <Hero />
        <About />
        <Expertise />
        <ProjectGallery />
        <GitHubCerts />
        <Contact />
      </main>
    </>
  );
}
