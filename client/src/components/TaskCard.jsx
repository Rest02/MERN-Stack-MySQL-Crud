import React from "react";

function TaskCard({ task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✅" : "❌"}</span>
      <span>{task.createAT}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TaskCard;
