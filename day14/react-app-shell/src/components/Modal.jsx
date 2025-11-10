import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root") || (() => {
  const div = document.createElement("div");
  div.id = "modal-root";
  document.body.appendChild(div);
  return div;
})();

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        {children}
        <button onClick={onClose} style={{ marginTop: "1rem" }}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
