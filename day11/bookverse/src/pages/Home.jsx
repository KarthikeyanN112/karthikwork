import React, { useEffect, useState, useRef } from "react";
import BookList from "../components/BookList";
import { getBooks } from "../utils/api";
import LoaderHOC from "../components/LoaderHOC";

function Home({ books, loading }) {
  const [viewMode, setViewMode] = useState("grid");
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <button className={`btn btn-sm me-2 ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setViewMode("grid")}>Grid</button>
          <button className={`btn btn-sm ${viewMode === "list" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setViewMode("list")}>List</button>
        </div>
        <div className="d-flex align-items-center">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-secondary ms-2" onClick={() => inputRef.current.focus()}>
            Focus Search
          </button>
        </div>
      </div>

      <BookList books={filtered} viewMode={viewMode} />
      <p className="text-muted mt-3">Showing {filtered.length} books</p>
    </div>
  );
}

export default LoaderHOC(Home, getBooks);
