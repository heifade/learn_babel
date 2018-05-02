// import { Student } from "./Student";

// let student = new Student('aa', 1);
// console.log(student.getId(), student.getName());

async function f1() {
  return await 1;
}

async function f() {
  return await f1();
}

f()
  .then(v => {
    console.log(v);
  })
  .catch(e => {
    console.log(e);
  });
