import React from "react";
import "./EmployeeCard.css"

function EmployeeCard({employee,handleEditEmployee,deleteEmployee}){
    return(
        <div className="employee-card">
            <h2>{employee.name}</h2>
            <p>
                <strong>ID:</strong> {employee.id}
            </p>
            <p>
                <strong>Department:</strong> {employee.department}
            </p>
            <p>
                <strong>Salary:</strong> ${employee.salary}
            </p>
            <br />
            <button onClick={()=>handleEditEmployee(employee)}>Edit</button>
            <br />
            <button onClick={()=>deleteEmployee(employee.id)}>Delete</button>
        </div>
    )
}

export default EmployeeCard;