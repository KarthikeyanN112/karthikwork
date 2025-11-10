import React from "react";

const HeavyPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Heavy Page Loaded!</h2>
      <p>This is a heavy page with some simulated heavy content.</p>
      <img
        src="https://via.placeholder.com/1200x800?text=Heavy+Image"
        alt="Heavy content"
        style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }}
      />
      <p style={{ marginTop: "1rem" }}>
        {Array(100)
          .fill("This is a line of placeholder text for testing lazy loading. ")
          .join("")}
      </p>
    </div>
  );
};

export default HeavyPage;
