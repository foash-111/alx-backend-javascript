export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const keysArray = Object.keys(employeesList);
      return keysArray.length;
    },
  };
}
