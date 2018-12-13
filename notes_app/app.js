const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

console.log('Starting app.js');

const argv = yargs.command('add', 'Add a new note', {
  'title': {
    describe: 'Title of the note',
    demand: true,
  }
}).help().argv();

/*
fs.appendFile('greetings.txt', 'Hello world!', (err) => {
  if(err) {
    console.log('Unable to write to file.');
  }
});
*/
// OR
/* 
fs.appendFileSync('greetings.txt', '\nHello world!');  // this doesn't need callback
// fs.writefileSync() and readFileSync() are one of the others.
// readFileSync() throws error if file is not available.

var user = os.userInfo() // returns the loggedin user info
// console.log(user);  // this may differ based on OS but username is always consistent

fs.appendFileSync('greetings.txt', `Hello ${user.username}! you are ${notes.age}`);
console.log(notes.addFunc(2, 3.5));
console.log(_.isString('asdfasdf'), _.isString(1654));

console.log(process.argv);  // arguments vector gets all args when running our app from cli
console.log(yargs.argv);    // running 'node app.js --title "asdf 2" ' gives in key value pairs

notes.outputArgs(yargs.argv.title);
 */

/******ACCESSING METHODS IN OTHER FILES IMPORTED******/
// console.log(notes.addFunc(2, 3.5));
// console.log(_.isString('asdfasdf'), _.isString(1654));

/******ACCESSING COMMAND LINE ARGUMENTS******/
// console.log('Process', process.argv);  // arguments vector gets all args when running our app from cli
// yargs helps in parsing command line arguments
// console.log('Yargs', yargs.argv);    // running 'node app.js --title "asdf 2" ' gives in key value pairs

notes.outputArgs(yargs.argv.title);
notes.outputArgs(yargs.argv.body);

/*********BLOCKING CODE**********/
/* console.log('Starting user 1');
var user1 = notes.getUser1(1);
console.log('user1', user1);

console.log('Starting user 2');
var user2 = notes.getUser2(2);
console.log('user2', user2);

var sum = 1 + 2;
console.log('The sum is ' + sum); */

/*********ANOTHER-BLOCKING CODE**********/
/* console.log('Starting user 1');
notes.getUser1(() => {
  console.log(`Your id for getUser1`);
});

console.log('Starting user 2');
notes.getUser2(() => {
  console.log(`Your id for getUser2`);
});
var sum = 1 + 2;
console.log('The sum is ' + sum); */

/*********NON-BLOCKING CODE**********/
/* console.log('Starting user 1');
getUser1 = () => {
  for(let i=0; i < 100000000; i++) {let j = i}
  console.log(`Your id for getUser1`);
}

console.log('Starting user 2');
getUser2 = () => {
  console.log(`Your id for getUser2`);
}
getUser1();
getUser2();
var sum = 1 + 2;
console.log('The sum is ' + sum); */
