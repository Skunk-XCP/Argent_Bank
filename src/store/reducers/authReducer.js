// État initial du reducer
const initialState = {
   isAuthenticated: false,
   token: null,
   error: null,
};

export default function authReducer(state = initialState, action) {
   // Fonction reducer pour gérer les actions
   switch (action.type) {
      // Gère l'action de connexion réussie
      case "LOGIN_SUCCESS":
         return {
            // Conserve l'état actuel
            ...state,
            // Met à jour le statut d'authentification
            isAuthenticated: true,
            // Stocke le token reçu
            token: action.payload,
            // Réinitialise les erreurs
            error: null,
         };
      // Gère l'action d'échec de la connexion
      case "LOGIN_FAIL":
         return {
            ...state,
            isAuthenticated: false,
            token: null,
            error: "Aucun identifiant ne correspond",
         };
      // Gère l'action de déconnexion
      case "LOGOUT":
         return {
            ...state,
            isAuthenticated: false,
            token: null,
         };

      default:
         // Retourne l'état actuel pour toutes les autres actions
         return state;
   }
}
