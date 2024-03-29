export default function Filters({ tasks, setFilteredTasks }) {
  const handleFilterChange = (e) => {
    const filterType = e.target.value;
    let filteredTasks = [];

    if (filterType === "all") {
      filteredTasks = tasks;
    } else if (filterType === "done") {
      filteredTasks = tasks.filter((task) => task.completed);
    } else if (filterType === "pending") {
      filteredTasks = tasks.filter((task) => !task.completed);
    }

    setFilteredTasks(filteredTasks);
  };

  return (
    <div>
      <select
        onChange={handleFilterChange}
        name=""
        id=""
        style={{ width: "150px", height: "30px", border: "1px solid #fbf8fc" }}
      >
        <option value="all">Todas</option>
        <option value="done">Completas</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
  );
}
