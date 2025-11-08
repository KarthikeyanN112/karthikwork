import React from "react";

const UserGreeting = ({ render }) => {
  const user = { name: "Karthik", mood: "excited" };
  return <div>{render(user)}</div>;
};

export default UserGreeting;
