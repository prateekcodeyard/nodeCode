// console.log(module);

module.exports.age = 29; // accessible in app.js
let addFunc = (num1, num2) => {
  return num1 + num2;
}

let outputArgs = (title) => {
  console.log('the title is => ', title);
}

/*********BLOCKING CODE**********/
/* let getUser1 = (id) => {
  for(let i=0; i < 10000000000; i++) {let j = i};
  return `Your id for getUser1 ${id}`;
}

let getUser2 = (id) => {
  for(let i=0; i < 10; i++) {let j = i};
  return `Your id for getUser2 ${id}`;
} */

/*********NON-BLOCKING CODE**********/
getUser1 = (callback) => {
  for(let i=0; i < 100000000; i++) {let j = i}
  callback();
}
getUser2 = (callback) => {
  callback();
}

module.exports = {
  addFunc,
  outputArgs,
  getUser1,
  getUser2
}
