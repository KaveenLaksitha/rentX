import axios from "axios";

const HOST = "http://localhost:4000";

//for add employee
export const addEmployeeService = async (employeePayload) => {
  console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
  try {
    await axios.post(`${HOST}/api/employee`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    //console.log(error.response.data.status)
    return {
      ok: false, err: error.response.data.status
    };
  }
};

export const getEmployeeService = async (employeeId) => {
  try {
    const { data } = await axios.get(`${HOST}/api/employee/${employeeId}`);
    return {
      ok: true,
      data: data.data.data,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const updateEmployeeService = async (userId, employeePayload) => {
  console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
  try {
    await axios.put(`${HOST}/api/employee/${userId}`, employeePayload);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};

export const getAllEmployeesService = async () => {
  console.log("done;");
  try {
    const response = await axios.get(`${HOST}/api/employee`);
    console.log("response came", response);
    // console.log(response.data, "res data");
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

export const deleteEmployeeService = async (userId) => {
  try {
    await axios.delete(`${HOST}/api/employee/${userId}`);
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
    };
  }
};
