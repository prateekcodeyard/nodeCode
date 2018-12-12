const fs = require('fs');
const os = require('os');
var notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

console.log('Starting app.js');
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

var user = os.userInfo() // returns the loggedin user info
// console.log(user);  // this may differ based on OS but username is always consistent

fs.appendFileSync('greetings.txt', `Hello ${user.username}! you are ${notes.age}`);
*/

/******ACCESSING METHODS IN OTHER FILES IMPORTED******/
console.log(notes.addFunc(2, 3.5));
// console.log(_.isString('asdfasdf'), _.isString(1654));

/******ACCESSING COMMAND LINE ARGUMENTS******/
// console.log('Process', process.argv);  // arguments vector gets all args when running our app from cli
// yargs helps in parsing command line arguments
// console.log('Yargs', yargs.argv);    // running 'node app.js --title "asdf 2" ' gives in key value pairs

notes.outputArgs(yargs.argv.title);