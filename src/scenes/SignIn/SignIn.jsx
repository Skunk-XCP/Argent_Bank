import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions/authAction";

export function SignIn() {
   // Utilise useSelector pour accéder à l'état d'authentification du store Redux
   const auth = useSelector((state) => state.auth.isAuthenticated);
   const token = useSelector((state) => state.auth.token);
   const error = useSelector((state) => state.auth.error);
   // useDispatch pour dispatcher des actions Redux
   const dispatch = useDispatch();
   const navigate = useNavigate();
   // État local pour gérer les données du formulaire
   const [formData, setFormData] = useState({ username: "", password: "" });

   // useEffect pour réagir aux changements d'état d'authentification
   useEffect(() => {
      const fetchData = async () => {
         if (auth) {
            // Stocke le token et redirige vers le profil
            localStorage.setItem("token", token);
            // dispatch(postProfile());
            navigate("/profile");
         }
      };
      fetchData();
   }, [auth, navigate, token]);

   // Gère la soumission du formulaire
   const handleSubmit = async (event) => {
      event.preventDefault();
      // Dispatch l'action de connexion
      dispatch(login(formData));
   };

   // Gère le changement dans les inputs du formulaire
   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   return (
      <>
         <main className="main bg-dark">
            <section className="sign-in-content">
               <i className="fa fa-user-circle sign-in-icon"></i>
               <h1>Sign In</h1>
               <form onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                     <label htmlFor="username">Username</label>
                     <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="input-wrapper">
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="input-remember">
                     <input type="checkbox" id="remember-me" />
                     <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <button type="submit" className="sign-in-button">
                     Sign In
                  </button>
               </form>
               {error && <span className="error-message">{error}</span>}
            </section>
         </main>
      </>
   );
}
