import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BookCard({ book, viewMode }) {
  return (
    <div className={`card mb-3 p-3 ${viewMode === "grid" ? "book-grid" : "book-list"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{book.title}</h5>
          <p className="mb-1 text-muted">by {book.author}</p>
          <p className="fw-bold">₹{book.price}</p>
        </div>
        <Link to={`/book/${book.id}`} className="btn btn-outline-primary">Details</Link>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  viewMode: PropTypes.oneOf(["grid", "list"]),
};
