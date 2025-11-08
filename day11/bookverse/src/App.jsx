import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <Link to="/home" className="navbar-brand fw-bold">📚 BookVerse</Link>
        <div className="ms-auto">
          <Link to="/home" className="btn btn-outline-primary mx-1">Home</Link>
          <Link to="/add" className="btn btn-outline-success mx-1">Add Book</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
