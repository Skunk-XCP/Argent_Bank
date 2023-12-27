import { apiConnect } from "../../api/APIConnect.js";
import { LOGIN } from "../../api/config.js";

// Action asynchrone pour la connexion
export const login = (user) => async (dispatch) => {
   try {
      // Envoie une requête POST pour se connecter
      const response = await apiConnect().post(LOGIN, {
         email: user.username,
         password: user.password,
      });
      // Dispatch l'action de succès de connexion avec le token
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.body.token });
   } catch (error) {
      // Dispatch l'action d'échec en cas d'erreur
      dispatch({ type: "LOGIN_FAIL", payload: error });
   }
};

// Action pour la déconnexion
export const logOut = () => async (dispatch) => {
   try {
      // Supprime le token du localStorage
      localStorage.removeItem("token");
      // Dispatch l'action de déconnexion
      dispatch({ type: "LOGOUT" });
   } catch (error) {
      console.error(error);
   }
};
