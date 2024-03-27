import React from "react";
import { useTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTask();
  const navigate = useNavigate();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✅" : "❌"}</span>
      <span>{task.createAT}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  );
}

export default TaskCard;
