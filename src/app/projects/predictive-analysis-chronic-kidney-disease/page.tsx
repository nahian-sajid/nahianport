const highlights = [
  "Built a chronic kidney disease prediction workflow in Python using scikit-learn, Pandas, and TensorFlow.",
  "Compared logistic regression, decision tree, and neural network models for CKD classification.",
  "Handled missing-value imputation, categorical encoding, normalization, and train-test splitting before evaluation.",
  "Measured not only prediction quality, but also runtime and memory use across a PC and Raspberry Pi deployment setup.",
  "Identified serum creatinine and blood pressure as especially influential predictors in the report analysis.",
];

const notes = [
  "The report frames this project as both a machine learning study and an embedded-systems deployment question: how well do CKD models hold up when moved from a conventional PC to a Raspberry Pi?",
  "A large part of the work was data preparation first, not just model training. Missing clinical values were imputed, categorical fields were encoded, and numerical features were normalized before the models were compared.",
  "The final writeup emphasizes balancing predictive quality against runtime and memory cost, which makes the project more practical than a pure accuracy-only comparison.",
  "The notebook includes additional experiments, but the strongest portfolio story here is the resource-aware comparison between compact models and higher-capacity models for affordable diagnostic support.",
];

const metrics = [
  { label: "Dataset rows", value: "400" },
  { label: "Logistic regression accuracy", value: "87%" },
  { label: "ROC-AUC", value: "0.91" },
  { label: "Raspberry Pi NN accuracy", value: "89%" },
];

export default function PredictiveAnalysisForChronicKidneyDiseasePage() {
  return (
    <main className="project-page">
      <section className="section project-page__hero">
        <a className="project-page__back" href="/#projects">
          Back to Projects
        </a>
        <h1>Predictive Analysis for Chronic Kidney Disease</h1>
        <p className="project-page__lede">
          A machine learning project focused on predicting chronic kidney
          disease outcomes using structured clinical data, with careful
          preprocessing, feature analysis, and comparison across supervised
          learning models.
        </p>
        <div className="project-page__actions">
          <a
            className="button-secondary"
            href="/projects/chronic-kidney-disease/CME465-IEEE-Report.pdf"
            target="_blank"
          >
            Open Report
          </a>
          <a
            className="button-primary"
            href="/projects/chronic-kidney-disease/Predictive-Analysis-Chronic-Kidney-Disease.ipynb"
            target="_blank"
          >
            Open Notebook
          </a>
        </div>
      </section>

      <section className="section project-details">
        <article className="panel project-details__main">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Overview</span>
            <h2>Predictive modeling with an embedded-systems angle.</h2>
            <p>
              This project explored how machine learning can be used to predict
              chronic kidney disease from clinical measurements and patient
              indicators, while also asking a practical deployment question:
              which models still make sense on a resource-constrained embedded
              platform like the Raspberry Pi? The work combined preprocessing,
              model comparison, and resource-aware evaluation instead of looking
              at accuracy alone.
            </p>
          </div>
        </article>

        <article className="panel project-details__side">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Highlights</span>
            <h2>What the project covered</h2>
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
          <h2>What the report found.</h2>
          <p>
            The IEEE-style report used a 400-patient CKD dataset and compared
            model quality alongside embedded deployment cost. Logistic
            regression reached 87 percent accuracy with a ROC-AUC of 0.91, and
            the neural-network comparison reported 87 percent accuracy on PC
            versus 89 percent on Raspberry Pi with different runtime and memory
            tradeoffs.
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
          <h2>What matters most about the project.</h2>
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
