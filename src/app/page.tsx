const skills = [
  {
    name: "C",
    icon: "c",
    accent: "#4f86c6",
  },
  {
    name: "C++",
    icon: "cpp",
    accent: "#2c6fbb",
  },
  {
    name: "Python",
    icon: "python",
    accent: "#e3b341",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    accent: "#f0c419",
  },
  {
    name: "Verilog HDL",
    icon: "",
    accent: "#d95f43",
  },
  {
    name: "React",
    icon: "react",
    accent: "#3aaed8",
  },
  {
    name: "React Native",
    icon: "react",
    accent: "#43b0f1",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    accent: "#5c9f48",
  },
  {
    name: "Firebase",
    icon: "firebase",
    accent: "#f38b2a",
  },
  {
    name: "TensorFlow",
    icon: "tensorflow",
    accent: "#ff7a00",
  },
  {
    name: "PyTorch",
    icon: "pytorch",
    accent: "#ee4c2c",
  },
  {
    name: "Quartus Prime",
    icon: "",
    accent: "#7d57c1",
  },
  {
    name: "NumPy",
    icon: "",
    accent: "#4c78a8",
  },
  {
    name: "Pandas",
    icon: "",
    accent: "#5b4b8a",
  },
  {
    name: "OpenCV",
    icon: "opencv",
    accent: "#3f8f5f",
  },
  {
    name: "MQTT",
    icon: "",
    accent: "#8a5cf6",
  },
  {
    name: "GCP",
    icon: "gcp",
    accent: "#4285f4",
  },
  {
    name: "IntelliJ",
    icon: "idea",
    accent: "#d34f73",
  },
  {
    name: "VS Code",
    icon: "vscode",
    accent: "#2f80ed",
  },
  {
    name: "PyCharm",
    icon: "pycharm",
    accent: "#1dbf73",
  },
  {
    name: "Eclipse",
    icon: "eclipse",
    accent: "#6a5acd",
  },
  {
    name: "Cisco Packet Tracer",
    icon: "",
    accent: "#0b7285",
  },
  {
    name: "Fritzing",
    icon: "",
    accent: "#f08c00",
  },
  {
    name: "Linux",
    icon: "linux",
    accent: "#444444",
  },
  {
    name: "Git",
    icon: "git",
    accent: "#e76f51",
  },
];

const projects = [
  {
    tag: "Assistive technology",
    title: "Portable English-ASL Translator",
    description:
      "Built a two-way offline translator on Raspberry Pi 5 using VOSK, MediaPipe, and a lightweight gesture classifier to support communication between ASL users and English speakers.",
    href: "/projects/portable-english-asl-translator",
  },
  {
    tag: "Hardware + DNN",
    title: "Approximate Radix-4 Booth Multiplier",
    description:
      "Designed an 8-bit approximate radix-4 Booth multiplier in Verilog HDL for DNN acceleration, reducing area and power while maintaining acceptable inference accuracy.",
    href: "/projects/approximate-radix-4-booth-multiplier",
  },
  {
    tag: "Mobile",
    title: "CarCare Mobile Application",
    description:
      "Developed a cross-platform mobile app with React Native, Expo, Firebase, and TensorFlow featuring dashboard symbol recognition, parking tracking, and service management.",
    href: "/projects/carcare-mobile-application",
  },
  {
    tag: "IoT",
    title: "Object Detection System",
    description:
      "Implemented a real-time Raspberry Pi object detection pipeline using YOLO, MQTT, and Python with live wireless data visualization and multi-threaded processing.",
  },
];

const experiences = [
  {
    tag: "2025",
    title: "Business Analyst at Tekarra Project Services",
    description:
      "Developed financial models, logistical plans, and strategic reporting for modular housing initiatives, including ROI projections, competitor analysis, and implementation timelines.",
  },
  {
    tag: "2024",
    title: "Software Development Intern at Tekarra",
    description:
      "Built core features for a cross-platform mobile application using React Native, Expo, and Google Cloud services, including secure real-time cloud connectivity.",
  },
  {
    tag: "2022-2024",
    title: "Security Supervisor at Regent Protection Services",
    description:
      "Led a 20-member team, handled surveillance system diagnostics and repair, and supported tactical security operations while improving compliance and reducing errors.",
  },
];

const contacts = [
  {
    title: "GitHub",
    description:
      "Explore my repositories, technical projects, and ongoing development work.",
    href: "https://github.com/nahian-sajid",
    label: "github.com/nahian-sajid",
    icon: "github",
  },
  {
    title: "LinkedIn",
    description: "Connect professionally and follow my engineering journey.",
    href: "https://linkedin.com/in/nahiansajid",
    label: "linkedin.com/in/nahiansajid",
    icon: "linkedin",
  },
  {
    title: "Resume",
    description: "View or download my current resume directly from the site.",
    href: "/Nahian-Sajid-Resume.pdf",
    label: "Open Resume",
    icon: "resume",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "github") {
    return (
      <svg aria-hidden="true" className="contact-card__icon-svg" viewBox="0 0 24 24">
        <path
          d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg aria-hidden="true" className="contact-card__icon-svg" viewBox="0 0 24 24">
        <path
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3Zm15.19 9.85c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.1-3.35 1.87V8.5H9.41c.05.76 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.04 1.88 2.58V20h3.38v-7.15Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="contact-card__icon-svg" viewBox="0 0 24 24">
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 2.5L16.5 7H14V4.5ZM8 11h8v1.5H8V11Zm0 3h8v1.5H8V14Zm0 3h5v1.5H8V17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <header className="site-nav">
        <div className="section site-nav__inner">
          <a className="brand" href="#top">
            NS
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="section hero" id="about">
          <div>
            <span className="eyebrow">Computer Engineering</span>
            <h1>Hello, I&apos;m Nahian</h1>
            <p>
              I&apos;m Nahian Sajid, a computer engineering student at the
              University of Saskatchewan based in Canada. I enjoy building
              across AI, embedded systems, mobile development, finance-focused
              analysis, and practical software engineering.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                View Projects
              </a>
              <a className="button-secondary" href="#contact">
                See More
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Quick profile overview">
            <div className="hero-card__top">
              <div>
                <div className="hero-card__title">Based in Canada</div>
                <p>
                  Building thoughtful systems across software, embedded
                  computing, machine learning, and product development.
                </p>
              </div>
              <span className="hero-card__badge">Computer Engineering</span>
            </div>
            <div className="hero-card__grid">
              <div className="hero-card__metric">
                <strong>20+</strong>
                <span>Tools and technologies</span>
              </div>
              <div className="hero-card__metric">
                <strong>5</strong>
                <span>Core technical interests</span>
              </div>
              <div className="hero-card__metric">
                <strong>2026</strong>
                <span>Expected graduation</span>
              </div>
              <div className="hero-card__metric">
                <strong>2</strong>
                <span>Tekarra roles completed</span>
              </div>
            </div>
          </aside>
        </section>

        <div className="section content-grid">
          <section className="panel">
            <div className="section-heading">
              <span className="section-heading__eyebrow">My Skills</span>
              <h2>Tools I use to build, test, and explore.</h2>
              <p>
                My toolkit spans software development, embedded systems,
                machine learning, and the developer tools that support
                fast-moving technical work.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <article
                  className="skill-card"
                  key={skill.name}
                  style={{ "--skill-accent": skill.accent } as React.CSSProperties}
                  tabIndex={0}
                >
                  <div className="skill-card__front" aria-hidden="true">
                    {skill.icon ? (
                      <img
                        alt=""
                        className="skill-card__logo"
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      />
                    ) : (
                      <span className="skill-card__mark">
                        {skill.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <div className="skill-card__overlay">
                    <strong>{skill.name}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="projects">
            <div className="section-heading">
              <span className="section-heading__eyebrow">Projects</span>
              <h2>Projects shaped by engineering depth and hands-on building.</h2>
              <p>
                I like working on systems that combine software with real-world
                constraints, whether that means embedded AI, hardware-aware
                optimization, or cross-platform product development.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <span className="project-card__tag">{project.tag}</span>
                  {project.href ? (
                    <>
                      <a className="project-card__link" href={project.href}>
                        <h3>{project.title}</h3>
                      </a>
                      <p>{project.description}</p>
                      <a className="project-card__cta" href={project.href}>
                        View Project
                      </a>
                    </>
                  ) : (
                    <>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="section-heading">
              <span className="section-heading__eyebrow">Experience</span>
              <h2>Here&apos;s the rundown.</h2>
              <p>
                My experience spans business analysis, software development,
                leadership, and technical operations. Each role has helped me
                strengthen how I solve problems and work with teams.
              </p>
            </div>
            <div className="experience-grid">
              {experiences.map((experience) => (
                <article className="experience-card" key={experience.title}>
                  <span className="experience-card__tag">{experience.tag}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="contact">
            <div className="section-heading">
              <span className="section-heading__eyebrow">Let&apos;s Chat</span>
              <h2>If you have any questions, or just want to talk, please reach out!</h2>
            </div>
            <div className="contact-grid">
              {contacts.map((contact) => (
                <a
                  className="contact-card"
                  href={contact.href}
                  key={contact.title}
                  rel="noreferrer"
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="contact-card__icon">
                    <ContactIcon type={contact.icon} />
                  </span>
                  <h3>{contact.title}</h3>
                  <p>{contact.description}</p>
                  <strong>{contact.label}</strong>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="section footer__inner">
          <p>(c) 2026 Nahian Sajid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
