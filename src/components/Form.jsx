import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Form({ addTask, tasks }) {
  const [task, setTask] = useState({
    title: "",
  });

  const [error, setError] = useState("");

  function validateTask(taskTitle) {
    const errorMessage =
      taskTitle.length < 3 || taskTitle.length > 20
        ? "La tarea debe tener entre 3 y 20 caracteres."
        : tasks.some((t) => t.title === taskTitle)
        ? "La tarea ya existe."
        : "";
  
    setError(errorMessage);
    
    return errorMessage === "";
  }
  

  function handleAddTask(e) {
    e.preventDefault();

    const taskTitle = task.title.trim();
    if (!validateTask(taskTitle)) return;

    const taskId = crypto.randomUUID();

    const newTask = {
      id: taskId,
      title: taskTitle,
    };

    addTask(newTask);

    setTask({ title: "" });
  }

  return (
    <form onSubmit={handleAddTask}>
      <Box display="flex" flexDirection="row" gap={1}>
        <input
          type="text"
          value={task.title}
          placeholder="Ingresá una tarea"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <Button type="submit" variant="contained" size="small">Add Task</Button>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}