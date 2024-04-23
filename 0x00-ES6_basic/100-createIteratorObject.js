export default function createIteratorObject(report) {
  const departmentalData = report.allEmployees;
  const employees = [];

  Object.keys(departmentalData).forEach((key) => {
    Object.keys(departmentalData[key]).forEach((key2) => {
      employees.push(departmentalData[key][key2]);
    });
  });

  return employees;
}
