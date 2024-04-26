import { IoIosArrowRoundForward } from "react-icons/io";
import IA from "../../assets/ArtificialIntelligence.svg";
import Accuracy from "../../assets/SmartUpscaler.svg";
import Delivery from "../../assets/DeliveryTime.svg";
import "./WhyCognicore.css";

const WhyCognicore = () => {
  const cards = [
    {
      image: IA,
      title: "Adaptive Learning",
      content: (
        <p>
          CogniCore learns from user interactions and document patterns,
          adapting in real-time to evolving needs. This ensures agile and
          responsive document management.
        </p>
      ),
      learnMoreLink: "Learn More",
      border: "#357A9D",
    },
    {
      image: Accuracy,
      title: "Enhanced Accuracy",
      content: (
        <p>
          CogniCore&apos;s advanced AI algorithms ensure precise document
          classification, content extraction, and data validation, minimizing
          errors and improving the accuracy of document management processes.
        </p>
      ),
      learnMoreLink: "Learn More",
      border: "#8158B7",
    },
    {
      image: Delivery,
      title: "Time Saving",
      content: (
        <p>
          Better user experience overall and advanced search capabilities, saves
          your company time and increases productivity.
        </p>
      ),
      learnMoreLink: "Learn More",
      border: "#C55DC6",
    },
  ];

  return (
    <section className="why-cognicore">
      <h2 className="sub-title">
        Why <span>CogniCore</span>!
      </h2>
      <div className="Why-Card-Container">
        {cards.map((card) => (
          <div
            className="Why-Card"
            key={card.title}
            style={{ borderColor: card.border }}
          >
            <div className="Why-Card-Header">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
            <div className="Why-Card-Content">{card.content}</div>
            <div className="Why-Card-Footer">
              {card.learnMoreLink && (
                <>
                  <h4>{card.learnMoreLink}</h4>
                  <IoIosArrowRoundForward size={50} className="arrow" />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCognicore;
