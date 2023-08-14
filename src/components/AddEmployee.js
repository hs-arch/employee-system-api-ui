import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstname:"",
        lastname:"",
        emailid:""
    });

    // deconstructing the entire employuee state here with ...employee.
    // it means when we have an event e
    // we take the value of a target variable from e, and assign it to 'value'
    // now whichever the target (fisr=rstname, lastname, email) sent its value in 'value' variable, that will be set by  this -> [e.target.name]:value
    // and the similar thing will happen for each field in the employee array, this is the way to de-construct the arry  ...employee 
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value})
    }


     const saveEmployee = (e) => {
        e.preventDefault(); // will help us prevent refreshing the page because at this point we have all updated values in our state. we dont want to loose that.
        
        // very simply passing the data from employee state in saveEmployuee service, which will be hittting out API.
        EmployeeService.saveEmployee(employee);
    }

  return (
    <div className = "flex max-w-2xl shadow mx-auto border">
        <div className = "px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm fornt-normal">First Name</label>
                <input 
                    type="text" 
                    name="firstname"
                    value={employee.firstname}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"
                    >
                </input>   
            </div>
            <div className="items-center justify-center h-14 w-full my-8">
                <label className="block text-gray-600 text-sm fornt-normal">Last Name</label>
                <input 
                    type="text"
                    name="lastname"
                    value={employee.lastname}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>   
            </div>
            <div className="items-center justify-center h-14 w-full my-8">
                <label className="block text-gray-600 text-sm fornt-normal">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={employee.email}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>   
            </div>

            <div className="border space-x-4">
                <button 
                className ="rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-2"
                // writing a function saveEmployee where we will use axios to invoke our rest api to save data
                onClick={saveEmployee}
                >    
                Save
                </button>
                <button className ="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-2">Clear</button>
            </div>

        </div>
    </div>
  )
}

export default AddEmployee