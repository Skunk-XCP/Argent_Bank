import { NavBar } from "../../components/NavBar/NavBar";
import { HeroContent } from "../../components/HeroContent/HeroContent";
import { Support } from "../../components/Features/Support/Support";
import { Security } from "../../components/Features/Security.jsx/Security";
import { Footer } from "../../components/Footer/Footer";
import { Savings } from "../../components/Features/Savings/Savings";

export function HomePage() {
   return (
      <>
         <NavBar />
         <main>
            <HeroContent />
            <section className="features">
               <Support />
               <Savings />
               <Security />
            </section>
         </main>
         <Footer />
      </>
   );
}
