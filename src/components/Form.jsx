import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { RiAddCircleLine } from "react-icons/ri";

export default function Form({ addTask, tasks }) {
  const [task, setTask] = useState({
    title: "",
  });

  const [error, setError] = useState("");

  function validateTask(taskTitle) {
    const errorMessage =
      taskTitle.length < 3 || taskTitle.length > 25
        ? "La tarea debe tener entre 3 y 25 caracteres."
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
      <Box
        display="flex"
        flexDirection="row"
        gap={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <input
          type="text"
          value={task.title}
          placeholder="Ingresá una tarea"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          style={{ width: "250px", height: "35px", border: "1px solid #fbf8fc" }}
        />
        <IconButton type="submit" variant="contained" size="small">
          <RiAddCircleLine style={{ fontSize: "30px", color: "#577590"}} />
        </IconButton>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
