import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaTrashCan } from "react-icons/fa6";
import { MdCloudDone } from "react-icons/md";

export default function Task({ task, tasks, setTasks, handleDeleteTask }) {
  const [completed, setCompleted] = useState(task.completed || false);

  const handleDelete = () => {
    handleDeleteTask(task.id);
  };

  const handleCheckboxChange = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setCompleted(!completed);
  };

  return (
    <div
      style={{
        border: "1px solid #fbf8fc",
        padding: "0px 10px",
        margin: "2px 0",
      }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          sx={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {task.title}
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleCheckboxChange}>
            <MdCloudDone style={{ color: completed ? "#4caf50" : "#bdbdbd", fontSize: "27px" }} />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <FaTrashCan style={{ fontSize: "20px" }}/>
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
