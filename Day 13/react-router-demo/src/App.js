import React, { useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import NotFound from "./pages/notFound";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null); // create ref for CSSTransition

  return (
    <div style={{ maxWidth: 800, margin: "36px auto", padding: "0 16px" }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 12 }}>About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="page"
          timeout={300}
          nodeRef={nodeRef} // attach ref here
        >
          <div ref={nodeRef} className="route-wrapper">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
