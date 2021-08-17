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
    return {
      ok: false, err: error.response.data.status
    };
  }
};

// export const getEmployeeService = async (employeeId) => {
//   try {
//     const { data } = await axios.get(`${HOST}/api/employee/${employeeId}`);
//     return {
//       ok: true,
//       data: data.data.data,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };

// export const updateEmployeeService = async (userId, employeePayload) => {
//   console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
//   try {
//     await axios.put(`${HOST}/api/employee/${userId}`, employeePayload);
//     return {
//       ok: true,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//     };
//   }
// };

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

  console.log(data, "<<<<<<<<<<<<<<<<deleteeeeeeee");
  console.log(reason, "<<<<<<<<<<<<<<<<deleteeeeeeee reasonnnnnn");

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

//for make inquiry
export const addInquiry = async (data) => {
  console.log(data, "<<<<<<<<<<<<<<<<<<<<<<<<");
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


//for make inquiry
// export const addInquiry = async (data) => {
//   console.log(data, "<<<<<<<<<<<<<<<<<<<<<<<<");
//   try {
//     await axios.post(`${HOST}/api/inquiry`, data);
//     return {
//       ok: true,
//     };
//   } catch (error) {
//     return {
//       ok: false, err: error.response.data.status
//     };
//   }
// };

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