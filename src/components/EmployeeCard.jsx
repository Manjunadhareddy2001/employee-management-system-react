import React from "react";
import "./EmployeeCard.css"

function EmployeeCard({employee}){
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
        </div>
    )
}

export default EmployeeCard;