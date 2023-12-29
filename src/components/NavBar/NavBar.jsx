import logo from "../../assets/images/argentBankLogo.png";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/actions/authAction";

export function NavBar() {
   // Hooks pour la navigation et dispatcher des actions Redux
   const navigate = useNavigate();
   const dispatch = useDispatch();

   // Accède à l'état d'authentification dans le store Redux
   const auth = useSelector((state) => state.auth.isAuthenticated);

   // Définit la fonction pour gérer le logout
   const handleLogOut = () => {
      // Dispatch l'action de logout
      dispatch(logOut());
      navigate("/");
   };

   return (
      <>
         <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
               <img
                  className="main-nav-logo-image"
                  src={logo}
                  alt="Argent Bank Logo"
               />
               <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
               {/* Affiche les liens en fonction de l'état d'authentification */}
               {auth ? (
                  <>
                     <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        User
                     </Link>
                     <Link
                        className="main-nav-item"
                        to="/"
                        onClick={handleLogOut}
                     >
                        Sign Out
                     </Link>
                  </>
               ) : (
                  <Link className="main-nav-item" to="/signin">
                     <i className="fa fa-user-circle"></i>
                     Sign In
                  </Link>
               )}
            </div>
         </nav>
         {/* Outlet pour les composants enfants de routing */}
         <Outlet />
      </>
   );
}
