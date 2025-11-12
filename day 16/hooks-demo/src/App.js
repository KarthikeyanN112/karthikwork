import React from "react";
import { useFetch } from "./components/useFetch";

export default function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ color: "red", textAlign: "center" }}>Error: {error}</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>📦 Custom Hook: useFetch</h2>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

