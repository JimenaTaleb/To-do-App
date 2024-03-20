import Task from "./Task";
import { Box } from "@mui/material";

export default function TaskContainer({
  tasks,
  setTasks,
  filteredTasks,
  setFilteredTasks,
}) {
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setFilteredTasks(updatedTasks);
  };

  return (
    <div>
      <Box display="flex" flexDirection="column" mminheight="2800px" marginTop="50px">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </Box>
    </div>
  );
}

