import { Route, Routes } from "react-router-dom";
import { HomePage } from "./scenes/HomePage/HomePage";
import { SignIn } from "./scenes/SignIn/SignIn";
import { UserProfile } from "./scenes/UserProfile/UserProfile";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

export function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/signin" element={<SignIn />} />
            <Route
               path="/profile/*"
               element={
                  <ProtectRoute>
                     <Route index element={<UserProfile />} />
                  </ProtectRoute>
               }
            />
         </Routes>
      </>
   );
}
