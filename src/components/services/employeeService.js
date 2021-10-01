import axios from "axios";

const HOST = "http://localhost:4000";

//for add an employee
export const addEmployeeService = async (employeePayload) => {
  console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
  try {
    await axios.post(`${HOST}/api/employee`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false, err: error.response.data.status
    };
  }
};

//for add an employee
export const updateEmployeeService = async (empId, employeePayload) => {
  console.log(empId, "updateeee<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log("update payloaddddddddd", employeePayload);

  try {
    await axios.put(`${HOST}/api/updateEmployee/${empId}`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false, err: error.response.data.status
    };
  }
};

//for retrive the all employee records
export const getAllEmployeesService = async () => {
  console.log("done;");
  try {
    const response = await axios.get(`${HOST}/api/employee`);
    console.log("response came", response);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

//for delete an employee and add him/her to past employee collection
export const deleteEmployeeService = async (data, reason) => {

  try {
    await axios.post(`${HOST}/api/resignation`, { reason, ...data });
    const response = await axios.post(`${HOST}/api/removeEmployee`, data);
    if (response) {
      return {
        ok: true,
      };
    }
  } catch (error) {
    return {
      ok: false, err: error.response.data.status
    };
  }

};

//for make an inquiry
export const addInquiry = async (data) => {
  try {
    await axios.post("https://getform.io/f/d5448fa8-dff5-4ce0-a927-7ec55756f5a4", data);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false, err: error.response.data.status
    };
  }
};

//for get all the past employee records
export const getAllPastEmployeesService = async () => {
  console.log("done;");
  try {
    const response = await axios.get(`${HOST}/api/pastEmployees`);
    console.log("response came", response);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

//for search on resigned employees
export const searchEmployeesService = async (input) => {

  console.log("data for searchhh>>>>>>>", input)
  try {
    const response = await axios.get(`${HOST}/api/searchEmployees/${input}`);
    console.log("response came for search", response);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

//for search on resigned employees
export const searchPastEmployeesService = async (input) => {

  console.log("data for searchhh>>>>>>>", input)
  try {
    const response = await axios.get(`${HOST}/api/searchEmployees/${input}`, { params: { type: "pastEmp" } });
    console.log("response came for search", response);
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

// for generate report on employee
export const searchForReport = async (payload) => {
  try {
    const response = await axios.get(`${HOST}/api/employeeReport/${payload.designation}/${payload.ageFrom}/${payload.ageTo}/${payload.gender}`);
    console.log("response came", response);
    if (!response.data.ok) {
      return {
        ok: false,
      };
    }
    return {
      ok: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};