// lets import fs from node
import * as fs from "node:fs";
console.log("Code Execution Start");
fs.readFile("file.txt", "utf-8", (err, txt) => {
  if (err) {
    console.log("Something Went Wrong");
  } else {
    const data = JSON.parse(txt).users;
    console.log(
      `There are total ${data.length} users and their heights are:- `
    );
    const usersheight = [];
    data.forEach((user) => {
      usersheight.push(user.height);
    });

    console.log(` ${usersheight} respectively`);
  }
});
console.log("Code Execution End");

// lets see how this code will run.
/* First line 2 will execute then 3  and then at line 4 its a async function so this function will be skipped and code will come to line 20 and now at this line 20 will be executed now whole code is executed, this async function will be called and its execution will start so the output will be:-  
Code Execution start 
CodeExecution End and then this 
async func output*/