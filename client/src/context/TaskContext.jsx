import { createContext, useContext, useState } from "react";
import {
  getTaskRequest,
  deleteTaskRequest,
  createTaskRequest,
  getOneTaskRequest,
  updateTaskRequest,
} from "../api/task.api";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("El contexto tiene que estar dentro del provider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTask() {
    const response = await getTaskRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getOneTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, loadTask, deleteTask, createTask, getTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
