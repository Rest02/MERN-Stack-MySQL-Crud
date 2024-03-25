import React from "react";
import { deleteTaskRequest } from "../api/task.api";

function TaskCard({ task }) {
  const handleDelete = async (id) => {
    try {
      const result = await deleteTaskRequest(id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✅" : "❌"}</span>
      <span>{task.createAT}</span>
      <button>Edit</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
