import Description from "../../Components/Description/Description";
import Iframe from "../../Components/Iframe/Iframe";
import HelpGuid from "../../Components/HelpGuide/HelpGuid";
import WhyCongicore from "../../Components/WhyCognicore/WhyCognicore";
import Features from "../../Components/Features/Features";
import Subscription from "../../Components/Subscription/Subscription";
export default function Home() {
  return (
    <div>
      <div className="space-sections">
        <Description />
      </div>
      <div className="space-sections">
        {" "}
        <Iframe />
      </div>
      <div className="space-sections">
        <WhyCongicore />
      </div>
      <div className="space-sections">
        {" "}
        <Features />
      </div>
      <div className="space-sections">
        <Subscription />
      </div>
      <div className="space-sections">
        {" "}
        <HelpGuid />
      </div>
    </div>
  );
}
