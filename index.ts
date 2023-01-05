const nameChange: string = "trttttr";

console.log('test', nameChange);

interface Student {
    name: string;
    age: number;
}
let students = [];

function createStudent(student: Student) {
   return  students.push(student);
}

const newStudent = {
    name: "ngoc anh",
    age: 18
}
createStudent(newStudent);