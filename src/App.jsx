import { Route, Routes } from "react-router-dom";
import { HomePage } from "./scenes/HomePage/HomePage";
import { SignIn } from "./scenes/SignIn/SignIn";
import { UserProfile } from "./scenes/UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkToken } from "./store/actions/authAction";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

export function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(checkToken());
   }, [dispatch]);

   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
               path="/profile/*"
               element={
                  <ProtectRoute>
                     <Route path="/" element={<UserProfile />} />
                  </ProtectRoute>
               }
            />
         </Routes>
      </>
   );
}
