import React,{useState,useEffect} from "react";

function EmployeeForm({addEmployee, editingEmployee, updateEmployee}){
    const [employee,setEmployee]=useState({
        name:"",
        department:"",
        salary:"",
        status:"Active"
    })
    useEffect(()=>{
        if(editingEmployee){
            setEmployee(editingEmployee);
        }
    },[editingEmployee])

    const [error,setError]=useState({
        name:"",
        department:"",
        salary:""
    });
    function handleEmployee(event){
        setEmployee({
            ...employee, [event.target.name]:event.target.value
        })
        setError({
            ...error,[event.target.name]:""
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        const newError ={name:"",
                        department:"",
                        salary:""
        };

            if(employee.name.trim() === ""){
                    newError.name="Name is required "
            }
            if(employee.department.trim() === ""){
                    newError.department="Department is required"
            }
            if(employee.salary.trim() === ""){
                    newError.salary="Salaray is required"
            }
            setError(newError);
            if(Object.values(newError).every(value => value === "")){
                 if (editingEmployee) {
    updateEmployee(employee);
}else{
                const newEmployee={
            ...employee,
            id:Date.now()
        };
                addEmployee(newEmployee);
    }
                setError({
    name: "",
    department: "",
    salary: ""
});
                    setEmployee({
    name: "",
    department: "",
    salary: "",
    status: "Active"
});
            }
    }

    return(<>
        <form onSubmit={handleSubmit} >
           <label htmlFor="name">Name: </label> <input type="text" value={employee.name} id="name"  onChange={handleEmployee} name="name"/> <br />
           {error.name && <p>{error.name}</p>}
           <label htmlFor="department">Department: </label> <input type="text" value={employee.department} id="department"  onChange={handleEmployee} name="department"/> <br />
           {error.department && <p>{error.department}</p>}
           <label htmlFor="salary">Salary: </label> <input type="number" value={employee.salary} id="salary"  onChange={handleEmployee} name="salary"/> <br />
           {error.salary && <p>{error.salary}</p>}
           <select name="status" value={employee.status} onChange={handleEmployee}>
            <option value="Active">Active</option>
            <option value="Leave">Leave</option>
           </select>
           <button type="submit">{editingEmployee? "Update Employee" :"Add Employee"}</button>
        </form >
    </>)
}
export default EmployeeForm;