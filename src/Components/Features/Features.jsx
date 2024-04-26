import Docs from "../../assets/Documents.svg";
import Content from "../../assets/Content.svg";
import BarChart from "../../assets/BarChart.svg";
import DataProtection from "../../assets/DataProtection.svg";
import SummaryList from "../../assets/SummaryList.svg";
import AIFile from "../../assets/AIFile.svg";
import "./Features.css";

const cards = [
  {
    image: Docs,
    title: "Document Classification",
    content:
      "AI and ML algorithms automate document classification based on content, structure, or metadata, streamlining organization and retrieval in EDM systems.",
    border: "#357A9D",
  },
  {
    image: Content,
    title: "Content Extraction",
    content:
      "AI and ML algorithms extract key data from unstructured documents using OCR, NER, and information extraction techniques. This enables automatic indexing and storage of relevant information in EDM systems for easier search and analysis.",

    border: "#8158B7",
  },
  {
    image: BarChart,
    title: "Data Visualization",
    content:
      "Data visualization reveals trends and employee statistics, employing pie charts for proportions and linear charts for trends, aiding swift decision-making.",

    border: "#C55DC6",
  },
  {
    image: DataProtection,
    title: "Role-Based Data Access Control",
    content:
      'AI limits data access based on user roles. For example, if a basic employee requests sensitive data like company benefits for 2024, the AI responds: "Access denied.',
    border: "#C55DC6",
  },
  {
    image: SummaryList,
    title: "Summarization",
    content:
      "AI not only restricts data access based on user roles but also provides document summarization for easier comprehension. For instance, it condenses lengthy documents into concise summaries, ensuring users grasp key points efficiently.",
    border: "#C55DC6",
  },
  {
    image: AIFile,
    title: "Consulting",
    content:
      "The company owner can seek advice from AI to optimize costs and enhance employee efficiency, receiving key recommendations to increase profits.",
    border: "#C55DC6",
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2 className="sub-title">
        <span>CogniCore</span> Features!
      </h2>
      <div className="features-container">
        {cards.map((card) => (
          <div className="feature-card" key={card.title}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
