import React, { useState } from "react";

const ProblemChild = ({ shouldCrash }) => {
  if (shouldCrash) throw new Error("💥 Component crashed!");
  return <p>All good! No errors.</p>;
};

const ErrorBoundaryDemo = () => {
  const [crash, setCrash] = useState(false);

  return (
    <div>
      <h2>Error Boundary Demo</h2>
      <p>Click “Crash App” to trigger an error handled by ErrorBoundary.</p>
      <button onClick={() => setCrash(true)}>Crash App</button>
      <ProblemChild shouldCrash={crash} />
    </div>
  );
};

export default ErrorBoundaryDemo;
