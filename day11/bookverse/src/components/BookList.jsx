import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books, viewMode }) {
  return (
    <div className={viewMode === "grid" ? "row" : "list-group"}>
      {books.map((b) => (
        <div key={b.id} className={viewMode === "grid" ? "col-md-4 mb-3" : ""}>
          <BookCard book={b} viewMode={viewMode} />
        </div>
      ))}
    </div>
  );
}
