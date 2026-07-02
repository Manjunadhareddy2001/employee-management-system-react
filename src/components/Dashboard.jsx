import React,{useState} from "react";
import EmployeeCard from "./EmployeeCard";
import "./Dashboard.css"

function Dashboard({employees,handleEditEmployee,deleteEmployee}){
    return(<>
            <h1 className="dashboard-title">
                Employee Dashboard
            </h1>
            <div className="dashboard">
            {employees.map((employee)=>(
                <EmployeeCard key={employee.id} employee={employee} handleEditEmployee={handleEditEmployee} deleteEmployee={deleteEmployee}/>
            ))}
            </div>
    </>)
}

export default Dashboard;