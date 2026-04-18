import Image from "next/image";

type GalleryItem =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      alt: string;
      silent?: boolean;
    };

const gallery: GalleryItem[] = [
  {
    type: "image",
    src: "/projects/asl-translator/translator-open.jpg",
    alt: "Open hardware view showing the Raspberry Pi setup inside the translator.",
  },
  {
    type: "image",
    src: "/projects/asl-translator/translator-front.jpg",
    alt: "Front view of the portable English-ASL translator device.",
  },
  {
    type: "image",
    src: "/projects/asl-translator/translator-battery.jpg",
    alt: "Internal battery and display setup for the translator device.",
  },
  {
    type: "video",
    src: "/projects/asl-translator/translator-demo.mp4",
    alt: "Demo video showing the English-ASL translator in use.",
    silent: true,
  },
  {
    type: "image",
    src: "/projects/asl-translator/translator-ui-demo.webp",
    alt: "Live desktop interface of the English-ASL translator during sign recognition.",
  },
  {
    type: "image",
    src: "/projects/asl-translator/translator-screen.png",
    alt: "Portable device screen showing the translator interface and visual output.",
  },
  {
    type: "image",
    src: "/projects/asl-translator/translator-team.jpeg",
    alt: "Team photo presenting the finished English-ASL translator project.",
  },
  {
    type: "video",
    src: "/projects/asl-translator/translator-demo-2.mp4",
    alt: "Additional demo video of the English-ASL translator project.",
    silent: true,
  },
];

const highlights = [
  "Built as a two-way offline translator for ASL users and English speakers.",
  "Ran on Raspberry Pi 5 hardware with a dedicated portable enclosure.",
  "Used VOSK for offline speech-to-text and local text-to-speech.",
  "Integrated MediaPipe landmark extraction with a lightweight gesture classifier.",
  "Focused on real-time responsiveness and portable battery-powered operation.",
];

export default function PortableEnglishAslTranslatorPage() {
  return (
    <main className="project-page">
      <section className="section project-page__hero">
        <a className="project-page__back" href="/#projects">
          Back to Projects
        </a>
        <h1>Portable English-ASL Translator</h1>
        <p className="project-page__lede">
          A two-way offline translator designed on Raspberry Pi 5 to support
          communication between ASL users and English speakers through speech,
          gesture recognition, and a portable custom-built device.
        </p>
        <div className="project-page__actions">
          <a
            className="button-primary"
            href="https://github.com/HananProjects/English-to-ASL-Translator"
            rel="noreferrer"
            target="_blank"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="section project-gallery">
        {gallery.map((item) => (
          <figure className="project-gallery__item" key={item.src}>
            {item.type === "image" ? (
              <Image
                alt={item.alt}
                className="project-gallery__image"
                height={900}
                priority={item.src === gallery[0].src}
                src={item.src}
                width={700}
              />
            ) : (
              <video
                aria-label={item.alt}
                className="project-gallery__image"
                autoPlay={item.silent}
                controls={!item.silent}
                loop={item.silent}
                muted={item.silent}
                playsInline
                preload="metadata"
              >
                <source
                  src={item.src}
                  type={item.src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
                />
              </video>
            )}
          </figure>
        ))}
      </section>

      <section className="section project-details">
        <article className="panel project-details__main">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Overview</span>
            <h2>Built for real-world accessibility and portability.</h2>
            <p>
              This project focused on making communication more accessible by
              combining offline speech processing, gesture recognition, and
              embedded hardware inside a portable handheld format. The goal was
              to create a system that could work without relying on cloud
              services while still feeling responsive and practical to use.
            </p>
          </div>
        </article>

        <article className="panel project-details__side">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Highlights</span>
            <h2>What it includes</h2>
          </div>
          <ul className="project-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
