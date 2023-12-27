import { NavBar } from "../../components/NavBar/NavBar";
import { HeroContent } from "../../components/HeroContent/HeroContent";
import { Features } from "../../components/Features/Features";
import { Footer } from "../../components/Footer/Footer";

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
