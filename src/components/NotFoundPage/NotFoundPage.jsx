import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import s from "./style.module.css";

export function NotFoundPage() {
   return (
      <>
         <div className={s.container}>
            <h2 className={s.error_404}>404</h2>
            <p className={s.error_message}>
               La page que vous demandez{" "}
               <span className={s.error_message_span}>n'existe pas.</span>
            </p>
            <Link to="/" className={s.error_link}>
               Retourner sur la page d'accueil
            </Link>
         </div>
         <Footer />
      </>
   );
}
