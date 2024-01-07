import { PROFILE } from "../../api/config";
import { apiProfile } from "../../api/APIConnect";

export const updateProfile = (userData) => async (dispatch) => {
   try {
      // Envoie une requête PUT à l'API avec les données de l'utilisateur
      const response = await apiProfile().put(
         PROFILE,
         {
            firstName: userData.formData.firstname,
            lastName: userData.formData.lastname,
         },
         {
            // Ajoute le jeton d'authentification dans l'en-tête de la requête
            headers: {
               Authorization: `Bearer ${userData.token}`,
            },
         }
      );

      // Si la requête réussit, envoie une action de succès avec les données reçues
      dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: response.data });
   } catch (error) {
      dispatch({ type: "UPDATE_PROFILE_FAIL", payload: error.response });
   }
};
