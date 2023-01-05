var nameChange = "trttttr";
console.log('test', nameChange);
var students = [];
function createStudent(student) {
    return students.push(student);
}
var newStudent = {
    name: "ngoc anh",
    age: 18
};
//giúp phát hiện ra lỗi ngay trong lúc code
createStudent(newStudent);
// Hỗ trợ nhắc code
console.log(students.length);
var number = 123;
var fullname = 'test';
//Downleveling
var year = 2022;
var greetting = "Hello word " + (year + 1);
// Literal types
var countLet = 1; // let count: kieu du lieu number
var count = 1; // const count: 1 ==> kieu du lieu la 1
var channelName = 'aht tech'; // const channelName: 'aht tech'
var isActive = false; // const isActive: false
var usertest = {
    id: 1,
    name: 'John'
};
// dù dùng từ khóa const khai báo user Object id và name có thể thay đổi được nên id suy diễn là number name là string
var user = {
    id: 1,
    name: 'John'
}; // khong thay doi dc chi doc có thêm readonly
// Type Assertion
// nhận vào param là literal type
function getStatusName(state) {
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
