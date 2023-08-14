import React from 'react'

const AddEmployee = () => {
  return (
    <div className = "flex max-w-2xl shadow mx-auto border">
        <div className = "px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm fornt-normal">First Name</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>   
            </div>
            <div className="items-center justify-center h-14 w-full my-8">
                <label className="block text-gray-600 text-sm fornt-normal">Last Name</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>   
            </div>
            <div className="items-center justify-center h-14 w-full my-8">
                <label className="block text-gray-600 text-sm fornt-normal">Email</label>
                <input type="email" className="h-10 w-96 border mt-2 px-2 py-2"></input>   
            </div>

            <div className="border space-x-4">
                <button className ="rounded text-white font-semibold bg-green-400 hover:bg-green-600 py-2 px-2">Save</button>
                <button className ="rounded text-white font-semibold bg-red-400 hover:bg-red-600 py-2 px-2">Clear</button>
            </div>

        </div>
    </div>
  )
}

export default AddEmployee