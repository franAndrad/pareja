import React from "react";

function PersonCard({ name, onSelect }) {
  return (
    <div className="person-card" onClick={onSelect}>
      <h2>{name}</h2>
    </div>
  );
}

export default PersonCard;
