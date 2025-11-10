import React, { useState, Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const HeavyPage = lazy(() => import("./pages/HeavyPage"));
const PureComponentDemo = lazy(() => import("./pages/PureComponentDemo"));
const ErrorBoundaryDemo = lazy(() => import("./pages/ErrorBoundaryDemo"));
const ModalPortalDemo = lazy(() => import("./pages/ModalPortalDemo"));

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case "lazy":
        return <HeavyPage />;
      case "pure":
        return <PureComponentDemo />;
      case "error":
        return <ErrorBoundaryDemo />;
      case "portal":
        return <ModalPortalDemo />;
      default:
        return <p>Select a section above.</p>;
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>React App Shell</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setActiveSection("lazy")}>Lazy Load</button>
        <button onClick={() => setActiveSection("pure")}>Pure Component</button>
        <button onClick={() => setActiveSection("error")}>Error Boundary</button>
        <button onClick={() => setActiveSection("portal")}>Portal (Modal)</button>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          minHeight: "400px",
        }}
      >
        <ErrorBoundary>
          <Suspense fallback={<p>Loading section...</p>}>{renderSection()}</Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
