const getStudentIdsSum = (students) =>
  students.reduce((prev, cur) => prev + cur.id, 0);

export default getStudentIdsSum;
