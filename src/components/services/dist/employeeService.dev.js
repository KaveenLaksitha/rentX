"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEmployeesServiceCount = exports.searchPastEmployeesService = exports.searchEmployeesService = exports.getAllPastEmployeesService = exports.addInquiry = exports.deleteEmployeeService = exports.getAllEmployeesService = exports.updateEmployeeService = exports.addEmployeeService = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HOST = "http://localhost:4000"; //for add an employee

var addEmployeeService = function addEmployeeService(employeePayload) {
  return regeneratorRuntime.async(function addEmployeeService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(employeePayload, "<<<<<<<<<<<<<<<<<<<<<<<<");
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(HOST, "/api/employee"), employeePayload));

        case 4:
          return _context.abrupt("return", {
            ok: true
          });

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", {
            ok: false,
            err: _context.t0.response.data.status
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; //for add an employee


exports.addEmployeeService = addEmployeeService;

var updateEmployeeService = function updateEmployeeService(empId, employeePayload) {
  return regeneratorRuntime.async(function updateEmployeeService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(empId, "updateeee<<<<<<<<<<<<<<<<<<<<<<<<");
          console.log("update payloaddddddddd", employeePayload);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].put("".concat(HOST, "/api/updateEmployee/").concat(empId), employeePayload));

        case 5:
          return _context2.abrupt("return", {
            ok: true
          });

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          return _context2.abrupt("return", {
            ok: false,
            err: _context2.t0.response.data.status
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 8]]);
}; //for retrive the all employee records


exports.updateEmployeeService = updateEmployeeService;

var getAllEmployeesService = function getAllEmployeesService() {
  var response;
  return regeneratorRuntime.async(function getAllEmployeesService$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("done;");
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(HOST, "/api/employee")));

        case 4:
          response = _context3.sent;
          console.log("response came", response);
          return _context3.abrupt("return", {
            ok: true,
            data: response.data.data
          });

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", {
            ok: false
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; //for delete an employee and add him/her to past employee collection


exports.getAllEmployeesService = getAllEmployeesService;

var deleteEmployeeService = function deleteEmployeeService(data, reason) {
  var response;
  return regeneratorRuntime.async(function deleteEmployeeService$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(data, "<<<<<<<<<<<<<<<<deleteeeeeeee");
          console.log(reason, "<<<<<<<<<<<<<<<<deleteeeeeeee reasonnnnnn");
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(HOST, "/api/resignation"), _objectSpread({
            reason: reason
          }, data)));

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(HOST, "/api/removeEmployee"), data));

        case 7:
          response = _context4.sent;

          if (!response) {
            _context4.next = 10;
            break;
          }

          return _context4.abrupt("return", {
            ok: true
          });

        case 10:
          _context4.next = 15;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", {
            ok: false,
            err: _context4.t0.response.data.status
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 12]]);
}; //for make an inquiry


exports.deleteEmployeeService = deleteEmployeeService;

var addInquiry = function addInquiry(data) {
  return regeneratorRuntime.async(function addInquiry$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log(data, "<<<<<<<<<<<<<<<<<<<<<<<<");
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("https://getform.io/f/d5448fa8-dff5-4ce0-a927-7ec55756f5a4", data));

        case 4:
          return _context5.abrupt("return", {
            ok: true
          });

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", {
            ok: false,
            err: _context5.t0.response.data.status
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; //for get all the past employee records


exports.addInquiry = addInquiry;

var getAllPastEmployeesService = function getAllPastEmployeesService() {
  var response;
  return regeneratorRuntime.async(function getAllPastEmployeesService$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log("done;");
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(HOST, "/api/pastEmployees")));

        case 4:
          response = _context6.sent;
          console.log("response came", response);
          return _context6.abrupt("return", {
            ok: true,
            data: response.data.data
          });

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](1);
          return _context6.abrupt("return", {
            ok: false
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.getAllPastEmployeesService = getAllPastEmployeesService;

var searchEmployeesService = function searchEmployeesService(input) {
  var response;
  return regeneratorRuntime.async(function searchEmployeesService$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log("data for searchhh>>>>>>>", input);
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(HOST, "/api/searchEmployees/").concat(input)));

        case 4:
          response = _context7.sent;
          console.log("response came for search", response);
          return _context7.abrupt("return", {
            ok: true,
            data: response.data.data
          });

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](1);
          return _context7.abrupt("return", {
            ok: false
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.searchEmployeesService = searchEmployeesService;

var searchPastEmployeesService = function searchPastEmployeesService(input) {
  var response;
  return regeneratorRuntime.async(function searchPastEmployeesService$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log("data for searchhh>>>>>>>", input);
          _context8.prev = 1;
          _context8.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(HOST, "/api/searchEmployees/").concat(input), {
            params: {
              type: "pastEmp"
            }
          }));

        case 4:
          response = _context8.sent;
          console.log("response came for search", response);
          return _context8.abrupt("return", {
            ok: true,
            data: response.data.data
          });

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](1);
          return _context8.abrupt("return", {
            ok: false
          });

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; //for retrive the all employee records


exports.searchPastEmployeesService = searchPastEmployeesService;

var getAllEmployeesServiceCount = function getAllEmployeesServiceCount() {
  var response;
  return regeneratorRuntime.async(function getAllEmployeesServiceCount$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          console.log("done;");
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(HOST, "/api/EmployeeAvailable")));

        case 4:
          response = _context9.sent;
          console.log("response came", response);
          return _context9.abrupt("return", {
            ok: true,
            data: response.data.data
          });

        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](1);
          return _context9.abrupt("return", {
            ok: false
          });

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.getAllEmployeesServiceCount = getAllEmployeesServiceCount;
//# sourceMappingURL=employeeService.dev.js.map
