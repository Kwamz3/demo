import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import WIS from "./components/WIS";
import Policies from "./components/Policies";
import Promos from "./components/Promos";
import About from "./components/About";
import Services from "./components/Services";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import NotFound from "./components/NotFound";



function App() {
  return (
    <Theme>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} >

            <Route path='/faq' element={<FAQ />} />
            <Route path="/wis" element={<WIS />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:userId" element={<Services />} />
          </Route>
          <Route path='*' element={<NotFound />} />

        </Routes>

      </Router>
    </Theme>
  );
}

export default App;
