// importing filesystem from node as fs
import * as fs from "node:fs";
// lets create a file named file.txt and try to read file data from it
const filedata=fs.readFileSync('file.txt','utf-8');
// readFileSync is a synchronous function that will give output as a string
console.log(typeof filedata);
console.log(filedata);
// lets convert this data into json (javascript object notation and then find just usernames and store them in an array)
const users=JSON.parse(filedata).users;
let usernames=[];
users.forEach((user)=>
  {
    usernames.push(user.firstName);
  })
console.log(`Total users are: ${usernames.length}`);
console.log(usernames);