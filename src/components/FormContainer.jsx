import Form from "./Form";
import Filters from "./Filters";
import { Box } from "@mui/material";

export default function FormContainer({ tasks, setTasks, setFilteredTasks }) {
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Form addTask={addTask} tasks={tasks} />
        <Filters tasks={tasks} setFilteredTasks={setFilteredTasks} />
      </Box>
    </div>
  );
}
