import { FeatureItem } from "../FeatureItem/FeatureItem";
import { featuresData } from "../FeatureItem/FeatureItem";

export function Features() {
   return (
      <section className="features">
         <h2 className="sr-only">Features</h2>
         {featuresData.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} title={feature.title}>
               {feature.description}
            </FeatureItem>
         ))}
      </section>
   );
}
