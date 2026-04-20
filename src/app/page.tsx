import Image from "next/image";

type Skill = {
  name: string;
  icon?: string;
  iconUrl?: string;
  mark?: string;
  accent: string;
};

function createFallbackSkillIcon(label: string, accent: string) {
  const foreground = "#fffaf2";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="${accent}"/>
      <text
        x="48"
        y="56"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="${label.length > 2 ? 28 : 34}"
        font-weight="700"
        fill="${foreground}"
      >${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createMediaPipeIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <g fill="#14a3b8">
        <rect x="14" y="18" width="12" height="46" rx="6"/>
        <rect x="14" y="66" width="12" height="18" rx="6"/>
        <rect x="34" y="18" width="12" height="66" rx="6"/>
        <circle cx="60" cy="26" r="6"/>
        <rect x="54" y="38" width="12" height="46" rx="6"/>
        <rect x="74" y="18" width="12" height="66" rx="6"/>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createVoskIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <polygon points="18,24 34,24 26,40" fill="#2f847c"/>
      <polygon points="34,24 50,24 42,40" fill="#8cc3bf"/>
      <polygon points="50,24 66,24 58,40" fill="#a9d7d7"/>
      <polygon points="66,24 82,24 74,40" fill="#b5e0de"/>
      <polygon points="26,40 42,40 34,56" fill="#4a9992"/>
      <polygon points="42,40 58,40 50,56" fill="#6eb2ae"/>
      <polygon points="58,40 74,40 66,56" fill="#88c2c0"/>
      <polygon points="34,56 50,56 42,72" fill="#66aca5"/>
      <polygon points="50,56 66,56 58,72" fill="#76b7b0"/>
      <polygon points="42,72 58,72 50,88" fill="#5da9a0"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createQuartusPrimeIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <circle cx="42" cy="44" r="28" fill="#79bbe5" stroke="#0d72b9" stroke-width="5"/>
      <path d="M22 30c12-12 34-14 48-2" fill="none" stroke="#0d72b9" stroke-width="5" stroke-linecap="round"/>
      <path d="M24 30c10 6 19 17 28 34" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/>
      <path d="M59 40l17 5 4 19-17 8-12-10 3-18z" fill="#0c6aa8"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createCiscoIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#08233b"/>
      <g fill="#ffffff">
        <rect x="16" y="33" width="4" height="10" rx="2"/>
        <rect x="24" y="28" width="4" height="20" rx="2"/>
        <rect x="32" y="24" width="4" height="28" rx="2"/>
        <rect x="40" y="30" width="4" height="16" rx="2"/>
        <rect x="48" y="34" width="4" height="8" rx="2"/>
        <rect x="56" y="30" width="4" height="16" rx="2"/>
        <rect x="64" y="24" width="4" height="28" rx="2"/>
        <rect x="72" y="28" width="4" height="20" rx="2"/>
      </g>
      <text
        x="48"
        y="74"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="19"
        font-weight="700"
        letter-spacing="2"
        fill="#ffffff"
      >CISCO</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createFritzingIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#e0311d"/>
      <rect y="78" width="96" height="18" fill="#8f250d"/>
      <g fill="#ffffff">
        <path d="M47 18c0-4 3-7 7-7h10c4 0 7 3 7 7s-3 7-7 7H58v9h8c4 0 7 3 7 7s-3 7-7 7H58v24a13 13 0 1 1-22 0V48h-6c-4 0-7-3-7-7s3-7 7-7h6v-9c0-8 6-14 14-14h4c4 0 7 3 7 7s-3 7-7 7h-3c-1 0-2 1-2 2v9h7V18Z"/>
      </g>
      <circle cx="47" cy="70" r="4.5" fill="#4f210d"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createRestApiIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <g fill="#0d335b">
        <circle cx="38" cy="38" r="22"/>
        <circle cx="58" cy="40" r="18"/>
        <circle cx="24" cy="52" r="14"/>
        <circle cx="72" cy="54" r="13"/>
        <rect x="16" y="46" width="64" height="24" rx="12"/>
      </g>
      <text
        x="48"
        y="60"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="16"
        font-weight="700"
        fill="#ffffff"
      >{REST}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createExcelIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <rect x="34" y="20" width="36" height="50" rx="5" fill="#21a366"/>
      <rect x="28" y="28" width="36" height="44" rx="5" fill="#107c41"/>
      <rect x="20" y="24" width="24" height="48" rx="5" fill="#185c37"/>
      <rect x="44" y="20" width="26" height="50" rx="5" fill="#33c481" opacity="0.9"/>
      <path d="M28 34h16v28H28z" fill="#107c41"/>
      <path d="M27 36h13l-4.5 7 4.8 9H36l-2.2-5-2.1 5h-4.1l4.4-9-4.1-7Z" fill="#ffffff"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createQuestaIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <path
        d="M24 66c-4-8-3-20 4-31 10-14 28-24 38-16 8 7 5 24-5 36-9 11-22 16-31 12M22 64c8 1 15 0 22-4M45 24c8 15 11 28 11 40M43 64c6 2 11 6 18 10"
        fill="none"
        stroke="#f58200"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createProcessingIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <path d="M52 14h10c15 0 28 13 28 29S77 72 62 72H52V14Z" fill="#1e66e8"/>
      <path d="M52 30h7c7 0 13 6 13 13s-6 13-13 13h-7V30Z" fill="#ffffff"/>
      <path d="M14 60l28-34 17 14-28 34-17-14Z" fill="#2937b8"/>
      <path d="M8 52l16-8 14 17-16 8L8 52Z" fill="#8fb0ff"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createSystemVerilogIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <path d="M14 52c8 10 22 16 38 16 12 0 24-3 34-9" fill="none" stroke="#2c2732" stroke-width="4" stroke-linecap="round"/>
      <path d="M82 44c-8-10-22-16-38-16-12 0-24 3-34 9" fill="none" stroke="#2c2732" stroke-width="4" stroke-linecap="round"/>
      <text
        x="48"
        y="53"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-size="16"
        fill="#2c2732"
      >SystemVerilog</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createVerilogIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="26" fill="#ffffff"/>
      <rect x="24" y="24" width="48" height="48" rx="8" fill="#111111"/>
      <text
        x="48"
        y="54"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="15"
        font-weight="700"
        fill="#ffffff"
      >FPGA</text>
      <g fill="#111111">
        <rect x="32" y="8" width="6" height="12" rx="2"/>
        <rect x="44" y="8" width="6" height="12" rx="2"/>
        <rect x="56" y="8" width="6" height="12" rx="2"/>
        <rect x="32" y="76" width="6" height="12" rx="2"/>
        <rect x="44" y="76" width="6" height="12" rx="2"/>
        <rect x="56" y="76" width="6" height="12" rx="2"/>
        <rect x="8" y="32" width="12" height="6" rx="2"/>
        <rect x="8" y="44" width="12" height="6" rx="2"/>
        <rect x="8" y="56" width="12" height="6" rx="2"/>
        <rect x="76" y="32" width="12" height="6" rx="2"/>
        <rect x="76" y="44" width="12" height="6" rx="2"/>
        <rect x="76" y="56" width="12" height="6" rx="2"/>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getSkillImage(skill: Skill) {
  if (skill.iconUrl) {
    return skill.iconUrl;
  }

  if (skill.icon) {
    return `https://skillicons.dev/icons?i=${skill.icon}`;
  }

  const label =
    skill.mark ??
    skill.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 3);

  return createFallbackSkillIcon(label, skill.accent);
}

const skills: Skill[] = [
  { name: "C", icon: "c", accent: "#4f86c6" },
  { name: "C++", icon: "cpp", accent: "#2c6fbb" },
  { name: "Python", icon: "python", accent: "#e3b341" },
  { name: "Java", icon: "java", accent: "#e76f51" },
  { name: "JavaScript", icon: "javascript", accent: "#f0c419" },
  { name: "TypeScript", icon: "typescript", accent: "#3178c6" },
  { name: "Processing", iconUrl: createProcessingIcon(), accent: "#1e66e8" },
  { name: "Verilog HDL", iconUrl: createVerilogIcon(), accent: "#111111" },
  { name: "SystemVerilog", iconUrl: createSystemVerilogIcon(), accent: "#2c2732" },
  { name: "Bash / C Shell", icon: "bash", accent: "#4caf50" },
  { name: "React", icon: "react", accent: "#3aaed8" },
  { name: "React Native", icon: "react", accent: "#43b0f1" },
  { name: "Node.js", icon: "nodejs", accent: "#5c9f48" },
  { name: "Expo", iconUrl: "https://cdn.simpleicons.org/expo/111111", accent: "#111111" },
  { name: "Jest", icon: "jest", accent: "#a93e52" },
  { name: "NumPy", iconUrl: "https://cdn.simpleicons.org/numpy/4DABCF", accent: "#4c78a8" },
  { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas/150458", accent: "#5b4b8a" },
  { name: "OpenCV", icon: "opencv", accent: "#3f8f5f" },
  { name: "TensorFlow", icon: "tensorflow", accent: "#ff7a00" },
  { name: "PyTorch", icon: "pytorch", accent: "#ee4c2c" },
  { name: "MediaPipe", iconUrl: createMediaPipeIcon(), accent: "#14a3b8" },
  { name: "VOSK", iconUrl: createVoskIcon(), accent: "#5aa9a3" },
  { name: "Raspberry Pi", iconUrl: "https://cdn.simpleicons.org/raspberrypi/C51A4A", accent: "#bc1142" },
  { name: "Quartus Prime", iconUrl: createQuartusPrimeIcon(), accent: "#0d72b9" },
  { name: "MQTT", iconUrl: "https://cdn.simpleicons.org/mqtt/660066", accent: "#8a5cf6" },
  { name: "Cisco Packet Tracer", iconUrl: createCiscoIcon(), accent: "#08233b" },
  { name: "Fritzing", iconUrl: createFritzingIcon(), accent: "#e0311d" },
  { name: "Firebase", icon: "firebase", accent: "#f38b2a" },
  { name: "MySQL", icon: "mysql", accent: "#00758f" },
  { name: "PostgreSQL", icon: "postgres", accent: "#336791" },
  { name: "GCP", icon: "gcp", accent: "#4285f4" },
  { name: "REST APIs", iconUrl: createRestApiIcon(), accent: "#0d335b" },
  { name: "Git", icon: "git", accent: "#e76f51" },
  { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/111111", accent: "#111111" },
  { name: "Linux", icon: "linux", accent: "#444444" },
  { name: "VS Code", icon: "vscode", accent: "#2f80ed" },
  { name: "IntelliJ IDEA", icon: "idea", accent: "#d34f73" },
  { name: "PyCharm", icon: "pycharm", accent: "#1dbf73" },
  { name: "Eclipse", icon: "eclipse", accent: "#6a5acd" },
  { name: "Jupyter", iconUrl: "https://cdn.simpleicons.org/jupyter/F37626", accent: "#f37726" },
  { name: "Excel", iconUrl: createExcelIcon(), accent: "#217346" },
  { name: "Postman", icon: "postman", accent: "#f26b3a" },
  { name: "QuestaSim / ModelSim", iconUrl: createQuestaIcon(), accent: "#f58200" },
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
            <Image
              alt="Nahian Sajid"
              className="brand__avatar"
              height={52}
              priority
              src="/nahian-profile.png"
              width={52}
            />
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
              across AI, embedded systems, hardware design, assistive
              technology, machine learning, mobile development, finance-focused
              analysis, technical analysis, and computer engineering.
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
                <strong>40+</strong>
                <span>Tools and technologies</span>
              </div>
              <div className="hero-card__metric">
                <strong>5</strong>
                <span>Core technical interests</span>
              </div>
              <div className="hero-card__metric">
                <strong>2026</strong>
                <span>Graduated</span>
              </div>
              <div className="hero-card__metric">
                <strong>2</strong>
                <span>Tekarra roles completed</span>
              </div>
            </div>
          </aside>
        </section>

        <div className="section content-grid">
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

          <section className="panel" id="experience">
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

          <section className="panel" id="tools">
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
                    <img
                      alt=""
                      className="skill-card__logo"
                      src={getSkillImage(skill)}
                    />
                  </div>
                  <div className="skill-card__overlay">
                    <strong>{skill.name}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="contact">
            <div className="section-heading">
              <span className="section-heading__eyebrow">More About Me</span>
              <h2>Explore my links, work, and background in one place.</h2>
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
