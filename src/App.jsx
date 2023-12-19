import { Route, Routes } from "react-router-dom";
import { HomePage } from "./scenes/HomePage/HomePage";

export function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </>
   );
}
