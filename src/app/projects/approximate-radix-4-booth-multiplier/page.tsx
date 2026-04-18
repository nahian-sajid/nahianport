const highlights = [
  "Approximate radix-4 Booth multiplier for DNN-friendly multiply-accumulate workloads.",
  "Five least significant partial product columns replaced with a fixed 10000 pattern.",
  "Area reduced by about 12 percent compared to the exact radix-4 design.",
  "Power reduced by about 11 percent with bounded numerical error.",
  "Maintained 95 percent last-layer accuracy and 84 percent overall sample pipeline accuracy.",
];

const notes = [
  "This design works by keeping the most important product bits accurate while simplifying the lower bits where small errors matter less for inference.",
  "The tradeoff is useful for DNN accelerators because many neural network workloads can tolerate small arithmetic error if the hardware becomes cheaper and more power efficient.",
  "Compared to an exact radix-4 Booth multiplier, this version saves hardware and switching activity by removing logic from the least significant region of the multiplier.",
  "Even though the delay increased slightly after synthesis, the overall area and power savings make the design attractive for resource-constrained accelerator paths.",
];

const metrics = [
  { label: "Area savings", value: "~12%" },
  { label: "Power savings", value: "~11%" },
  { label: "Last-layer accuracy", value: "95%" },
  { label: "Overall sample accuracy", value: "84%" },
];

export default function ApproximateRadix4BoothMultiplierPage() {
  return (
    <main className="project-page">
      <section className="section project-page__hero">
        <a className="project-page__back" href="/#projects">
          Back to Projects
        </a>
        <h1>Approximate Radix-4 Booth Multiplier</h1>
        <p className="project-page__lede">
          An 8-bit Verilog HDL multiplier designed for DNN acceleration by
          selectively approximating the least significant partial product
          columns, reducing hardware cost while preserving useful inference
          accuracy.
        </p>
        <div className="project-page__actions">
          <a
            className="button-secondary"
            href="https://github.com/nahian-sajid/multiplexerbooth"
            rel="noreferrer"
            target="_blank"
          >
            View GitHub
          </a>
          <a
            className="button-primary"
            href="/projects/booth-multiplier/Approximate-Radix-4-Booth-Multiplier.pdf"
            target="_blank"
          >
            Open PDF
          </a>
        </div>
      </section>

      <section className="section project-details">
        <article className="panel project-details__main">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Overview</span>
            <h2>Approximate computing for more efficient DNN hardware.</h2>
            <p>
              This project studies an approximate radix-4 Booth multiplier for
              hardware acceleration. The main idea is to simplify the lower
              partial product columns, where small numerical differences are
              often acceptable in neural network inference, while preserving the
              more important upper bits of the result.
            </p>
          </div>
        </article>

        <article className="panel project-details__side">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Highlights</span>
            <h2>Key points</h2>
          </div>
          <ul className="project-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section panel">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Results</span>
          <h2>Measured tradeoffs from the report.</h2>
          <p>
            The design reduces area and power compared to exact Booth
            multiplication, while keeping the product accurate enough for
            inference-tolerant workloads.
          </p>
        </div>

        <div className="metric-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section panel">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Notes</span>
          <h2>What this means in simpler terms.</h2>
        </div>
        <ul className="project-highlights">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
