import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateProfile } from "../../store/actions/editProfilAction";
import { postProfile } from "../../store/actions/profilAction";
import s from "./style.module.css";

export function UserProfile() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   // Sélecteurs Redux pour accéder à l'état global
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const token = useSelector((state) => state.auth.token);
   const userProfile = useSelector((state) => state.profile);

   // État local pour la gestion de l'édition et les données du formulaire
   const [isEditing, setIsEditing] = useState(false);
   const [formData, setFormData] = useState({ firstname: "", lastname: "" });

   const handleEditName = () => {
      setIsEditing(true);
   };

   const handleFormSubmit = (e) => {
      e.preventDefault();

      dispatch(updateProfile({ token, formData }));
      dispatch(postProfile({ token, isAuthenticated }));

      setFormData({
         firstname: "",
         lastname: "",
      });

      setIsEditing(false);
   };

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
   };

   // Écoute les changements d'authentification pour récupérer le profil
   useEffect(() => {
      if (!isAuthenticated) {
         navigate("/signin");
      } else {
         dispatch(postProfile({ token, isAuthenticated }));
      }
   }, [dispatch, isAuthenticated, navigate, token]);

   return (
      <>
         <NavBar />

         <main className="main bg-dark">
            <div className="header">
               <h1>
                  Welcome back {""}
                  {isEditing ? null : (
                     <>
                        <br />
                        {`${userProfile.body.firstName} ${userProfile.body.lastName}`}
                     </>
                  )}
               </h1>
            </div>
            {isEditing && (
               <form onSubmit={handleFormSubmit}>
                  <input
                     type="text"
                     name="firstname"
                     value={formData.firstname}
                     onChange={handleChange}
                  />
                  <input
                     type="text"
                     name="lastname"
                     value={formData.lastname}
                     onChange={handleChange}
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setIsEditing(false)}>
                     Cancel
                  </button>
               </form>
            )}
            {!isEditing && <button onClick={handleEditName}>Edit Name</button>}

            <h2 className="sr-only">Accounts</h2>
            <section className="account">
               <div className="account-content-wrapper">
                  <h3 className="account-title">
                     Argent Bank Checking (x8349)
                  </h3>
                  <p className="account-amount">$2,082.79</p>
                  <p className="account-amount-description">
                     Available Balance
                  </p>
               </div>
               <div className="account-content-wrapper cta">
                  <button className="transaction-button">
                     View transactions
                  </button>
               </div>
            </section>
            <section className="account">
               <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                  <p className="account-amount">$10,928.42</p>
                  <p className="account-amount-description">
                     Available Balance
                  </p>
               </div>
               <div className="account-content-wrapper cta">
                  <button className="transaction-button">
                     View transactions
                  </button>
               </div>
            </section>
            <section className="account">
               <div className="account-content-wrapper">
                  <h3 className="account-title">
                     Argent Bank Credit Card (x8349)
                  </h3>
                  <p className="account-amount">$184.30</p>
                  <p className="account-amount-description">Current Balance</p>
               </div>
               <div className="account-content-wrapper cta">
                  <button className="transaction-button">
                     View transactions
                  </button>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
