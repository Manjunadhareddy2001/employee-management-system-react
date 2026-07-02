import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import Dashboard from "./components/Dashboard";

function App() {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "John",
            department: "HR",
            salary: 50000,
            status: "Active"
        },
        {
            id: 2,
            name: "David",
            department: "IT",
            salary: 60000,
            status: "Active"
        },
        {
            id: 3,
            name: "Rahul",
            department: "Sales",
            salary: 45000,
            status: "Leave"
        }
    ]);
    const[editingEmployee,setEditingEmployee]=useState(null)

    function handleEditEmployee(employee){
        setEditingEmployee(employee);
        console.log(editingEmployee);
    } 

    function addEmployee(newEmployee){
        setEmployees((previousEmployees)=>[...previousEmployees,newEmployee])
    }

    function updateEmployee(updatedEmployee){
        setEmployees(previousEmployees =>previousEmployees.map(employee=>employee.id === updatedEmployee.id ? updatedEmployee:employee))
        setEditingEmployee(null);
    }

    function deleteEmployee(id){
        setEmployees(previousEmployees=>previousEmployees.filter(employee => employee.id !== id))
    }

    return (
        <>
            <EmployeeForm addEmployee={addEmployee} editingEmployee={editingEmployee} updateEmployee={updateEmployee}/>
            <Dashboard employees={employees} handleEditEmployee={handleEditEmployee} deleteEmployee={deleteEmployee} />
        </>
    );
}

export default App;
