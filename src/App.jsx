import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutSection from "./components/AboutSection";
import Businesses from "./components/Businesses";
import GlobalPresence from "./components/GlobalPresence";
import ContactSection from "./components/ContactSection";
import MainLayout from "./layout/MainLayout";

// GitHub Pages serves the app from a sub-path, so the router has to be told
// to strip that prefix before matching routes.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Shared Layout */}
        <Route element={<MainLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/about" element={<AboutSection />} />

          <Route
            path="/businesses"
            element={<Businesses />}
          />

          <Route path="/global" element={<GlobalPresence />} />

          <Route path="/contact" element={<ContactSection />} />

        </Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;