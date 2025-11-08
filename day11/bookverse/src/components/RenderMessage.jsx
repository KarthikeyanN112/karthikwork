import React from "react";

export default function RenderMessage({ render }) {
  return <div className="alert alert-info">{render()}</div>;
}
