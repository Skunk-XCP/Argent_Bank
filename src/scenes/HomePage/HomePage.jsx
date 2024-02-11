import { NavBar } from "../../components/NavBar/NavBar";
import { HeroContent } from "../../components/HeroContent/HeroContent";
import { Footer } from "../../components/Footer/Footer";
import { Features } from "../../components/Features/Features";

export function HomePage() {
   return (
      <>
         <NavBar />
         <main>
            <HeroContent />
            <Features />
         </main>
         <Footer />
      </>
   );
}
