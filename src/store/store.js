import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import editProfileReducer from "./reducers/editProfileReducer";

export default configureStore({
   // Configuration du store Redux
   reducer: {
      // Reducer pour l'authentification
      auth: authReducer,

      // Reducer pour la gestion du profil utilisateur
      profile: profileReducer,

      // Reducer pour la gestion de l'édition du profil
      editProfile: editProfileReducer,
   },
   // Configuration des middleware
   middleware: (getDefaultMiddleware) =>
      // Obtient les middleware par défaut avec
      // une configuration personnalisée
      getDefaultMiddleware({
         // Désactive les vérifications de sérialisation
         serializableCheck: false,
      }),
});
