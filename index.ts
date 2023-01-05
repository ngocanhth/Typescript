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

//giúp phát hiện ra lỗi ngay trong lúc code

createStudent(newStudent);

// Hỗ trợ nhắc code

console.log(students.length);



const number = 123;
const fullname = 'test';

//Downleveling
const year: number = 2022;
const greetting: string = `Hello word ${year + 1}`;

// Literal types

let countLet = 1; // let count: kieu du lieu number
const count = 1; // const count: 1 ==> kieu du lieu la 1
const channelName = 'aht tech'; // const channelName: 'aht tech'
const isActive = false; // const isActive: false

const usertest = {
    id: 1,
    name: 'John',
}

// dù dùng từ khóa const khai báo user Object id và name có thể thay đổi được nên id suy diễn là number name là string

const user = {
    id: 1,
    name: 'John',
} as const // khong thay doi dc chi doc có thêm readonly

// Type Assertion

// nhận vào param là literal type
function getStatusName(state: 'active') {
    console.log(state);
}


// let s = 'active'; // let s: string vì khai báo với let thì có thể thay đổi được
// getStatusName(s)

// solution 1
// let s: 'active' = 'active'; // or const s = 'active'
// getStatusName(s);

// // solution 2
// let s = 'active';
// getStatusName(s as 'active')

// let s1 = 1;

// getStatusName(s1 as 'active') ==> wrong vi không có quan hệ cha non