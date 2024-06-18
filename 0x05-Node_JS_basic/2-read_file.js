const fs = require("fs");
const Papa = require("papaparse");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const parsedData = Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    });
    const students = parsedData.data;
    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const studSet = new Set();
    students.forEach((student) => {
      studSet.add(student.field);
    });
    const studFields = Array.from(studSet);

    studFields.forEach((studField) => {
      const studsPerField = students.filter(
        (student) => student.field === studField
      );
      const studFirstName = [];
      studsPerField.forEach((studPerField) => {
        studFirstName.push(studPerField.firstname);
      });
      console.log(
        `Number of students in ${studField}: ${
          studFirstName.length
        }. List: ${studFirstName.join(", ")}`
      );
    });
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
