export default function createEmployeesObject(departmentName, employees) {
  const user = {
    [departmentName]: [...employees],
  };

  return user;
}
