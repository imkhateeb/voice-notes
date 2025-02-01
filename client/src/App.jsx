import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
