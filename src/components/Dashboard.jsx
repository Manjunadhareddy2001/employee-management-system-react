import React,{useState} from "react";
import EmployeeCard from "./EmployeeCard";
import "./Dashboard.css"

function Dashboard(){
    const [employees] = useState([
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
    return(<>
            <h1 className="dashboard-title">
                Employee Dashboard
            </h1>
            <div className="dashboard">
            {employees.map((employee)=>(
                <EmployeeCard key={employee.id} employee={employee}/>
            ))}
            </div>
    </>)
}

export default Dashboard;