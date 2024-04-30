interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "ezer",
  lastName: "Arthur",
  age: 24,
  location: "Kenya",
};

const studentTwo: Student = {
  firstName: "Ben",
  lastName: "Austo",
  age: 21,
  location: "Kenya",
};

const studentsList: Student[] = [studentOne, studentTwo];
const studentTable = document.createElement("table");
const studentTableBody = document.createElement("tbody");

studentsList.forEach((std) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.innerText = std.firstName;
  locationCell.innerText = std.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  studentTableBody.appendChild(row);
});

const appendTableToDocument = () => {
  studentTable.appendChild(studentTableBody);
  document.body.appendChild(studentTable);
};

appendTableToDocument();
