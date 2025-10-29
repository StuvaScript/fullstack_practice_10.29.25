import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/v1/employees");
        console.log("res:", res);
        const { data } = res.data;
        setEmployees(data);
      } catch (error) {
        console.log("Error in the get request", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Employees</h1>
      <ul>
        {employees.map(({ name, id }) => (
          <li key={id}>
            Name: {name}, ID: {id}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
