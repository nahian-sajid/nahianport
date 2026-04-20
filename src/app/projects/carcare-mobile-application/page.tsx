import Image from "next/image";

type WalkthroughItem = {
  step: string;
  title: string;
  screenTitle: string;
  screenBody: string;
  chips: string[];
  image?: string;
  imageAlt?: string;
};

const walkthrough: WalkthroughItem[] = [
  {
    step: "01",
    title: "Diagnose dashboard symbols",
    screenTitle: "Dashboard Symbol Helper",
    screenBody:
      "Take a photo or upload a dashboard warning icon to get a clearer explanation of what it means and what action to take next.",
    chips: ["Vision", "TensorFlow", "Quick diagnosis"],
    image: "/projects/carcare/screens/symbols-flow.png",
    imageAlt:
      "CarCare symbol scanning and symbol details screens shown in a phone-style layout.",
  },
  {
    step: "02",
    title: "Save your parking spot",
    screenTitle: "Parking Tracker",
    screenBody:
      "Drop your current location on the map and come back to it later when you need help finding your car.",
    chips: ["Maps", "Saved location", "Stress-free"],
    image: "/projects/carcare/screens/parking-flow.png",
    imageAlt: "CarCare parking screen showing a saved parking spot on the map.",
  },
  {
    step: "03",
    title: "Track maintenance history",
    screenTitle: "Service History",
    screenBody:
      "Keep your maintenance records organized in one place so oil changes, repairs, and service dates are easy to review.",
    chips: ["Records", "Reminders", "Ownership"],
    image: "/projects/carcare/screens/service-history.png",
    imageAlt:
      "CarCare service history screen showing active maintenance records and upcoming service information.",
  },
  {
    step: "04",
    title: "Find mechanics nearby",
    screenTitle: "Mechanic Finder",
    screenBody:
      "Search nearby mechanics and repair options based on your location when you need quick support.",
    chips: ["Nearby shops", "Location-based", "Convenience"],
    image: "/projects/carcare/screens/mechanics-flow.png",
    imageAlt:
      "CarCare mechanics flow showing tuning service filters and nearby workshop results on a map.",
  },
];

const techStack = [
  "React Native",
  "Expo",
  "Firebase",
  "TensorFlow",
  "Google Maps",
  "Google Cloud Vision",
  "Google Cloud Platform",
  "Local JSON storage",
];

const personas = [
  "Stressed Out Sam: quickly understand dashboard warning symbols.",
  "Forgetful Frank: save parking spots and get back to the car easily.",
  "Chill Guy David: keep track of service history without extra hassle.",
  "Danger Danny: find reliable mechanics nearby when something goes wrong.",
  "Racer Randy: locate performance shops and specialized service options.",
];

export default function CarCareMobileApplicationPage() {
  return (
    <main className="project-page project-page--carcare">
      <section className="section project-page__hero">
        <a className="project-page__back" href="/#projects">
          Back to Projects
        </a>
        <h1>CarCare Mobile Application</h1>
        <p className="project-page__lede">
          CarCare is a cross-platform mobile app built to make car ownership
          less confusing by bringing diagnosis, parking, maintenance tracking,
          and nearby service discovery into one clean mobile experience.
        </p>
        <div className="project-page__actions">
          <a
            className="button-secondary"
            href="https://github.com/nahian-sajid/carcare370"
            rel="noreferrer"
            target="_blank"
          >
            View GitHub
          </a>
          <a
            className="button-primary"
            href="/projects/carcare/CarCare-Final-Presentation.pdf"
            target="_blank"
          >
            View Presentation
          </a>
        </div>
      </section>

      <section className="section project-details">
        <article className="panel project-details__main">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What It&apos;s For</span>
            <h2>A one-stop app for the stressful parts of owning a car.</h2>
            <p>
              The idea behind CarCare was simple: drivers should not need five
              different apps to understand warning symbols, remember where they
              parked, organize service records, and find help nearby. CarCare
              bundles those moments into one mobile workflow.
            </p>
          </div>
        </article>

        <article className="panel project-details__side">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Tech Stack</span>
            <h2>Built with</h2>
          </div>
          <ul className="project-highlights">
            {techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section panel">
        <div className="section-heading">
          <span className="section-heading__eyebrow">How It Works</span>
          <h2>A step-by-step mobile walkthrough.</h2>
          <p>
            Instead of showing raw slides, this page turns the presentation into
            a product-style flow so the core value of the app is easier to
            understand at a glance.
          </p>
        </div>

        <div className="phone-flow">
          {walkthrough.map((item) => (
            <article className="phone-step" key={item.step}>
              <div className="phone-step__meta">
                <span className="phone-step__number">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.screenBody}</p>
                </div>
              </div>

              {item.image ? (
                <figure className="phone-screenshot">
                  <Image
                    alt={item.imageAlt ?? item.screenTitle}
                    className="phone-screenshot__image"
                    height={1400}
                    src={item.image}
                    width={900}
                  />
                </figure>
              ) : (
                <div className="phone-mockup">
                  <div className="phone-mockup__top" />
                  <div className="phone-mockup__screen">
                    <div className="phone-appbar">
                      <strong>CarCare</strong>
                      <span>Mobile</span>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card__label">{item.screenTitle}</span>
                      <p>{item.screenBody}</p>
                    </div>
                    <div className="phone-chip-row">
                      {item.chips.map((chip) => (
                        <span className="phone-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <div className="phone-preview">
                      <div className="phone-preview__line phone-preview__line--strong" />
                      <div className="phone-preview__line" />
                      <div className="phone-preview__line" />
                      <div className="phone-preview__map" />
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section project-details">
        <article className="panel project-details__main">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Personas</span>
            <h2>Built around real car-owner frustrations.</h2>
          </div>
          <ul className="project-highlights">
            {personas.map((persona) => (
              <li key={persona}>{persona}</li>
            ))}
          </ul>
        </article>

        <article className="panel project-details__side">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Next Steps</span>
            <h2>Where it could go next</h2>
          </div>
          <ul className="project-highlights">
            <li>Polish the UI and make transitions feel more production-ready.</li>
            <li>Expand Firebase sync for user data and service history.</li>
            <li>Increase the supported car and dashboard symbol database.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
