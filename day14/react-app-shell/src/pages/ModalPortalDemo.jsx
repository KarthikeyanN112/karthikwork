import React, { useState } from "react";
import Modal from "../components/Modal";

const ModalPortalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Portal (Modal) Demo</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h3>This modal uses React Portal!</h3>
          <p>It renders outside the main DOM tree.</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPortalDemo;
