interface DirectionInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectionInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

type employeeReturn = Teacher | Director;
type Salary = number | string;

const createEmployee = (salary: Salary): employeeReturn => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

const isDirector = (employee: employeeReturn): boolean => {
  if (employee instanceof Director) {
    return true;
  }
  return false;
};

const executeWork = (employee: any): string => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
};

type Subjects = "Math" | "History";

const teachClass = (subject: Subjects): string => {
  if (subject === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
};
