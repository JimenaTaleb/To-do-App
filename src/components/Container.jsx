import { useState } from "react";
import FormContainer from "./FormContainer";
import TaskContainer from "./TaskContainer";

export default function Container() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleTasksChange = (newTasks) => {
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  return (
    <main>
      <FormContainer
        tasks={tasks}
        setTasks={handleTasksChange}
        setFilteredTasks={setFilteredTasks}
      />
       <TaskContainer
        tasks={tasks}
        setTasks={setTasks}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
      />
    </main>
  );
}
