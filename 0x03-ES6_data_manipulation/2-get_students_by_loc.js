const getStudentsByLocation = (students, city) => {
  let studentByLocation = students.filter(
    (student) => student.location === city
  );

  return studentByLocation;
};
export default getStudentsByLocation;
