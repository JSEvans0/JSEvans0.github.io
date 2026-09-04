/* ==========================================================================
   data/projects.js  —  THE ONLY FILE YOU EDIT TO ADD A PROJECT

   Everything on the Home page ("Top 3") and the Projects page is generated
   from the two lists below. To add a project:

     1. Copy projects/TEMPLATE.html to projects/your-project-name.html
        and fill it in.
     2. Add an object to the PROJECTS list below.
     3. Set "featured: true" on exactly the three projects you want on the
        Home page (and "featured: false" on the one it replaces).

   Field reference (only title, blurb, page and repo are required):
     title     - Project name shown on the card.
     blurb     - 1-2 sentences. Keep it short; the detail lives on the page.
     tags      - Tools/skills shown as small pills.
     page      - Path to this project's own page.
     repo      - GitHub repository URL.
     demo      - Optional live app URL (adds a "Live App" link).
     result    - Optional one-line headline metric shown in bold on the card.
     featured  - true puts it in the "Top 3 Projects" section on Home.
     year      - Optional; shown on the Projects page.
   ========================================================================== */

const PROJECTS = [
  {
    title: "Airline Passenger Satisfaction",
    blurb:
      "Modeled ~130k passenger survey responses to find which parts of the travel " +
      "experience actually move satisfaction, then shipped an interactive explorer " +
      "so non-technical stakeholders can dig through it themselves.",
    tags: ["Python", "pandas", "scikit-learn", "Streamlit", "EDA"],
    page: "projects/airline-satisfaction.html",
    repo: "https://github.com/JSEvans0/Mod8-Project-Airline-Satisfaction-Predictions",
    demo: "https://jsevans0airlinepassengersatisfaction.streamlit.app/",
    result: "Online boarding was the single strongest driver of satisfaction.",
    featured: true,
    year: "2026"
  },
  {
    title: "Ames Home Price Predictions",
    blurb:
      "Cleaned an 82-column housing dataset down to a usable feature set and built a " +
      "linear regression model that explains 82% of the variation in sale price — " +
      "less than half the error of the baseline.",
    tags: ["Python", "pandas", "scikit-learn", "Linear Regression"],
    page: "projects/home-price-predictions.html",
    repo: "https://github.com/JSEvans0/Mod7-Project-Home-Price-Predictions",
    result: "R² = 0.82 on the test set; RMSE cut from $78,981 to $33,597.",
    featured: true,
    year: "2026"
  },
  {
    title: "Exploring IMDb Movies",
    blurb:
      "A self-directed exploration of IMDb's public datasets: 13.5 million rows merged " +
      "and filtered down to 174,050 clean movie records, then mined for what actually " +
      "correlates with a good rating.",
    tags: ["Python", "pandas", "Data Cleaning", "Visualization"],
    page: "projects/imdb-exploration.html",
    repo: "https://github.com/JSEvans0/Mod6-Project-Independent-Exploration",
    result: "Runtime and vote count show no meaningful relationship to rating.",
    featured: true,
    year: "2026"
  },
  {
    title: "Higher Education Consulting Analytics",
    blurb:
      "Analyzed cost, admissions and faculty data across U.S. colleges to give a " +
      "consulting client concrete, evidence-backed levers for raising graduation rates.",
    tags: ["Python", "pandas", "Seaborn", "EDA", "Recommendations"],
    page: "projects/higher-education-analytics.html",
    repo: "https://github.com/JSEvans0/Mod6-Project",
    result: "Faculty size and faculty education level tracked most closely with graduation rate.",
    featured: false,
    year: "2026"
  },
  {
    title: "Starbucks Nutrition Explorer",
    blurb:
      "An interactive Streamlit app for exploring the Starbucks menu dataset — " +
      "distributions, feature relationships, and a build-your-own chart page.",
    tags: ["Python", "Streamlit", "Plotly", "EDA"],
    page: "projects/starbucks-explorer.html",
    repo: "https://github.com/JSEvans0/Mod8-Mini-Project-Starbucks-EDA",
    result: "Ships a self-serve 'DIY EDA' page so users can chart any two features.",
    featured: false,
    year: "2026"
  }
];

/* --------------------------------------------------------------------------
   COURSEWORK — the smaller labs and practice notebooks. These are listed as
   plain links at the bottom of the Projects page; they don't get their own
   page. Add or remove lines freely.
   -------------------------------------------------------------------------- */

const COURSEWORK = [
  { title: "Airline Satisfaction — Classification Models", repo: "https://github.com/JSEvans0/Mod8-Project-Airline-Satisfaction-Predictions", topic: "Modeling" },
  { title: "Wine Classifications",                          repo: "https://github.com/JSEvans0/Mod8-Lab-Wine-Classifications", topic: "Classification" },
  { title: "Iris & Breast Cancer Classification",           repo: "https://github.com/JSEvans0/Mod8-Applied-Iris-Breast-Cancer", topic: "Classification" },
  { title: "Cell Phone Churn Analysis",                     repo: "https://github.com/JSEvans0/Mod8-Lab-Cell-Phone-Churning", topic: "Classification" },
  { title: "Classification Metrics & Definitions",          repo: "https://github.com/JSEvans0/Mod8-Lab-Classification-Definitions-Metrics", topic: "Classification" },
  { title: "College Admissions Analysis",                   repo: "https://github.com/JSEvans0/Mod7-Applied-College-Admissions", topic: "Regression" },
  { title: "Concrete Strength Predictions",                 repo: "https://github.com/JSEvans0/Mod7-Applied-Concrete-Strength", topic: "Regression" },
  { title: "MPG Predictions",                               repo: "https://github.com/JSEvans0/Mod7-Lab-MPG-Predictions", topic: "Regression" },
  { title: "Titanic Survival Analysis",                     repo: "https://github.com/JSEvans0/Mod6-Lab-Titanic-Analysis", topic: "EDA" },
  { title: "Exploratory Data Analysis Practice",            repo: "https://github.com/JSEvans0/Mod6-Lab-EDA-Practice", topic: "EDA" },
  { title: "Data Visualization",                            repo: "https://github.com/JSEvans0/Mod6-Data-Viz", topic: "Visualization" },
  { title: "Seaborn Practice",                              repo: "https://github.com/JSEvans0/Mod6-Lab-Seaborn-Practice", topic: "Visualization" },
  { title: "pandas Basics",                                 repo: "https://github.com/JSEvans0/Mod6-Pandas-Basics", topic: "pandas" },
  { title: "More pandas",                                   repo: "https://github.com/JSEvans0/Mod6-More-Pandas", topic: "pandas" },
  { title: "pandas Practice Lab",                           repo: "https://github.com/JSEvans0/Mod6-Lab-Pandas-Practice", topic: "pandas" },
  { title: "Jupyter Lab Fundamentals",                      repo: "https://github.com/JSEvans0/Mod6-Jupyter-Lab", topic: "Tooling" },
  { title: "SQL Practice",                                  repo: "https://github.com/JSEvans0/big-sql-energy-beginner", topic: "SQL" }
];
