import axios from "axios";

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employee_entity";

class EmployeeService{
 
    //  doing nothing here, just calling my localhost url where my backend service is running, and in that URL im sending data from 'employee' 
    //  and this employee is from our state which has all the current data.
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

}

export default new EmployeeService();