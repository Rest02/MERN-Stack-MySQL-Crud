import React, { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskContext";

function TaskPage() {
  const { tasks, loadTask } = useTask();

  useEffect(() => {
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length == 0) {
      return <h1>No hay tareas creadas aún</h1>;
    } else {
      return tasks.map((task) => <TaskCard task={task} key={task.id} />);
    }
  }
  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
}

export default TaskPage;
