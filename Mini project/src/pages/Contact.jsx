import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold text-primary">Contact Us</h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="shadow p-4 bg-white rounded"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" required />
          </div>

          <button className="btn btn-primary w-100 mt-3">Send Message</button>
        </form>
      ) : (
        <div className="alert alert-success mt-4 shadow-sm">
          Thank you! We have received your message and will get back shortly.
        </div>
      )}
    </div>
  );
}
