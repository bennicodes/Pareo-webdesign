import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/om-oss" element={<About />} />
      <Route path="/tjenester" element={<Services />} />
    </>
  )
);
