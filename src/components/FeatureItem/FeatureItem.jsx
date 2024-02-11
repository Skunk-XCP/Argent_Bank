import securityIcon from "../../assets/images/icon-security.png";
import moneyIcon from "../../assets/images/icon-money.png";
import chatIcon from "../../assets/images/icon-chat.png";

// Le composant pour un seul élément feature
export function FeatureItem({ icon, title, children }) {
   return (
      <div className="feature-item">
         <img src={icon} alt={`${title} Icon`} className="feature-icon" />
         <h3 className="feature-item-title">{title}</h3>
         <p>{children}</p>
      </div>
   );
}

// Les données de tes features
export const featuresData = [
   {
      icon: chatIcon,
      title: "You are our #1 priority",
      description:
         "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
   },
   {
      icon: moneyIcon,
      title: "More savings means higher rates",
      description:
         "The more you save with us, the higher your interest rate will be!",
   },
   {
      icon: securityIcon,
      title: "Security you can trust",
      description:
         "We use top of the line encryption to make sure your data and money is always safe.",
   },
];
