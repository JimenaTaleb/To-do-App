import { useState } from "react";
import FormContainer from "./FormContainer"
import TaskContainer from "./TaskContainer"

export default function Container() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  return (
    <main>
        <FormContainer tasks={tasks} setTasks={setTasks}/>
        <TaskContainer tasks={tasks} setTasks={setTasks}/>
    </main>
  )
}
