<h1>This Readme.md file will contain info about NOdejs Branch</h1>
<br/>

<p>Node:- Node is a runtime environment, it is Asynchronous and have non blocking input output, so it is good to make webserver because of its Asynchronous behaviour.

To Use node we have to download node and to manage node packages we need to install node package manager (npm), download and install them,
after downloading to check if they are correctly installed or not, run:-

1.  node --version
2.  npm --version
<br/>
These command from terminal will return you the version of node and npm if they are correctly installed
</p>

<h2>Node's Repal Interface</h2>
<br/>
<p>we can run node in terminal and we call it as repal interface, to open node in repal interface just type node in Terminal and now we can start writing js code in terminal, as soon as you type node in terminal and press enter you will see,<br/>
WELCOME TO NODE>JS (version of nodejs) <br/> 
TYpe ".help" for more information<br/>

now we can start writing code in repal interface

> let a=20;<br/>
> undefined<br>
> let b=30;<br>
> undefined<br>
> console.log(a+b);<br>
> 50<br>
> undefined<br>

</p>

<p>TO close this interface press (ctrl + c/Ctrl + d) any key combo and this will close the repal interface</p>
<br/>
<p>Ques:- How To run js file using node?
<br/>
Ans :- just type (node filename) if you are in the same folder in terminal where file is and if not then type the filename with location eg:-
1. node 1_run_js_file_using_node.js if you are in same folder 
2. node C:\Users\Priyank Behl\OneDrive - PDM University\Desktop\ern revision\1_run_js_file_using_node.js</p>

<h1>CHAPTER 1 (MOdule System, File System, REPL, NPM, Package.json )</h1>

<p>module:- each file in node is called as a module eg:- 1_run_js_file_using_node.js is a module, we cant access this files variable or functions from outside if this file because these are protected by modules, to use them we need to export, import them eg:- lets create 2_export.js file and 3_import.js file to learn export import,
checkout both file to learn how we export import.
<br/>
There are two ways to use a module's function or variable from outside the module.<br>
1. using require<br>
2. using export import<br>

note:-Require syntax is outdated so we will use es6 syntax that is export import, to use es6 syntax we have to create a package.json file and then create a object inside it and add a key value pair "type":"module" because by default node uses require syntax so we have to tell it we will use es6 syntax. or else node will throw an error
<br/>
 <ol>
   <li>
      <b>Package.json</b> :- <p>package.json is a file which is used to manage node like:-contain info for the project, containing metadata about the project as well as the list of dependencies it needs to run. Here are some key elements of a package.json file: (note:- we dont need to create package.json file manually we can just create it with one command but we will learn about it later, lets do it manually first)</p>
      <ol>
        <li>
          <p>Basic Metadata:</p>
          <ul type="disc">
            <li>name: The name of the project</li>
            <li>version: The current version of your project</li>
            <li>description: A brief description of the project</li>
            <li>main: The entry point of the application (e.g. index.js)</li>
            <li>scripts: Scripts that can be run using npm run (script-name)</li>
            <li>keywords: An array of keywords that describe your project</li>
            <li>author: The author of the project</li>
            <li>license: The license under which the project is distributed</li>
          </ul>
        </li>
        <li>
          <p>Dependencies:</p>
          <ul type="disc">
            <li>dependencies: Packages required for your project to run</li>
            <li>devDependencies: Packages required for development purposes only</li>
          </ul>
        </li>
      </ol>
   </li>

   <li>
   <b>NPM</b> :- <p>NPM stands for node package manager, npm take care of all the node modules, dependencies and project details,by creating a package.json file on its own, just write the comand:- </p>
   <p>(npm init) and follow the procedure, this will help you to create package.json file, lets rename the file that we created manually from package.json to 4_manual_package.json and create package.json using npm. we will lern about npm in detail in few mins</p>
   </li>

   <li><b>File System :-</b> <p>File System in nodejs is used to read and write from a file, lets create a 5_index.js file and learn about file syystem in it,</p>
   <ol>
     <li>First we import filesystem, we have two ways to do so one is using require and other is using import methode. we wil use this es6 import methode.
     import * as fs from "node:fs";
    </li>
    <li>There are a lot of metodes in this fs, lets explore some of them:-
      <ul>
      <li><b>readFileSync('filename','encodingmethode'):-</b>
      <p>This methode is a Synchronous methode used to read a file it takes 2 parameters filename and the encoding methode, and output the data in a string formate, we can then parse this data using JSON.parse() methode and convert it in a json object, eg:- visit 5_index.js file to see how its done.</p>
      </li>
      <li><b>readFile('filename','encoding','callbackfunction(err,txt)'):-</b><p>readFile perform exact same operation as readFileSync the only diffrence is that it is an asynchronous function it will not block the flow of execution of the code. to learn in detail see 6_asyncfilereading.js file</p>
      </li>
      </ul> 
    </li>
   </ol>

   </li>

</ol>

<h3>NPM DETAILED OVERVIEW:-</h3>
<p>Using npm init we created package.json which looks like this:-</p>
<img src="img/package.json1.png"/>
<p>Here We can understand whats in the file cause we have read about it earlier, Suppose we want to use bootstrap in our project or express or nodemon as devdependencies, how will we do it? (no need to know what express, bootstrap, nodemon is right now) <br/>
so instead of installing them manually we can just ask npm to do it just by syaing npm install bootstrap, npm install express, npm install nodemon
this will create a new key value pair in package.json named dependencies which will show that our project depends on these express, nodemon and bootstrap. lets run this command.
<br/>
This is how our package.json will look like and this will create a folder called node_modules which will have info of all the files for modules that we downloaded and file called package-lock.json which has a very detailed info about the dependencies of our project.
<img src="img/package.json2.png"/>
<br/>note:- We can also unistall these dependencies by saying npm unistall dependencyname,
<br/> eg:- npm unistall nodemon 
<br/>After Uninstalling NOdemon this is how package.json looks like
<img src="img/package.json3.png"/>
We Can Clearly see nodemon is gone from dependency object.
<br/>QUES:-What is devdependencies??
<br/> In a package.json file, devDependencies are packages that are only needed for local development and testing. These packages are not required for the application to run in production. They are used for tasks such as building, testing, and linting the code. 
nodemon is a devdependency module we can download it as dependency but it makes ore sense to download it as devdependency.
<br/>command :- npm install nodemon --save-dev, lets try this code.
<img src="img/package.json4.png"/>
This is how package.json looks like after installing devmon as devdependencies.
</p>


