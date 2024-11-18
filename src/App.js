import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Theme>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </Theme>
  );
}

export default App;
