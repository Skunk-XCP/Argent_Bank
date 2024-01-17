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

   const [error, setError] = useState("");
   const [invalidCharError, setInvalidCharError] = useState("");

   // État local pour la gestion de l'édition et les données du formulaire
   const [isEditing, setIsEditing] = useState(false);
   const [formData, setFormData] = useState({ firstname: "", lastname: "" });

   const handleEditName = () => {
      setIsEditing(true);
   };

   const regex = /^[A-Za-zÀ]{2,20}$/;

   const handleFormSubmit = (e) => {
      e.preventDefault();

      // Vérifie si les champs sont vides
      if (!formData.firstname || !formData.lastname) {
         setError("Les champs prénom et nom sont requis.");
         return;
      }

      // Vérifie d'abord la longueur des champs
      if (
         formData.firstname.length < 2 ||
         formData.firstname.length > 20 ||
         formData.lastname.length < 2 ||
         formData.lastname.length > 20
      ) {
         setInvalidCharError(
            "Le nom et le prénom doivent contenir entre 2 et 20 caractères."
         );
         return;
      }

      // Vérifie la longueur et les caractères alphabétiques
      if (!regex.test(formData.firstname) || !regex.test(formData.lastname)) {
         setInvalidCharError(
            "Seuls les caractères alphabétiques sont autorisés."
         );
         return;
      }

      // Réinitialise les messages d'erreur
      setError("");
      setInvalidCharError("");

      dispatch(updateProfile({ token, formData }));
      dispatch(postProfile({ token, isAuthenticated }));

      setFormData({
         firstname: "",
         lastname: "",
      });

      setIsEditing(false);
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (value === "" || regex.test(value)) {
         setFormData({ ...formData, [name]: value });
      }

      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
   };

   const handleCancel = () => {
      setIsEditing(false);
      setFormData({ firstname: "", lastname: "" }); // Réinitialise les champs
      setError(""); // Réinitialise les messages d'erreur
      setInvalidCharError("");
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
                  <div className={s.formContainer}>
                     <div className={s.inputsContainer}>
                        <div className={s.inputWrapper}>
                           <label htmlFor="newFirstName"></label>
                           <input
                              type="text"
                              name="firstname"
                              className={s.inputField}
                              placeholder={userProfile.body.firstName}
                              value={formData.firstname}
                              onChange={handleChange}
                           />
                        </div>
                        <div className={s.inputWrapper}>
                           <label htmlFor="newLastName"></label>
                           <input
                              type="text"
                              name="lastname"
                              className={s.inputField}
                              placeholder={userProfile.body.lastName}
                              value={formData.lastname}
                              onChange={handleChange}
                           />
                        </div>
                     </div>
                     {error && <p className={s.error_name}>{error}</p>}
                     {invalidCharError && (
                        <p className={s.error_name}>{invalidCharError}</p>
                     )}

                     <div className={s.buttonsContainer}>
                        <button
                           type="submit"
                           className={`${s.styleBtn} ${s.saveBtn}`}
                        >
                           Save
                        </button>
                        <button
                           type="button"
                           className={`${s.styleBtn} ${s.cancelBtn}`}
                           onClick={handleCancel}
                        >
                           Cancel
                        </button>
                     </div>
                  </div>
               </form>
            )}
            {!isEditing && (
               <button className="edit-button" onClick={handleEditName}>
                  Edit Name
               </button>
            )}

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
