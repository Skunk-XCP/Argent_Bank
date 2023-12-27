import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

export default configureStore({
   // Configuration du store Redux
   reducer: {
      // Reducer pour l'authentification
      auth: authReducer,
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
