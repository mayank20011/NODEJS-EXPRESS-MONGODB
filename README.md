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
   <li><b>Package.json</b> :- <p>package.json is a file which is used to manage node like:-contain info for the project, containing metadata about the project as well as the list of dependencies it needs to run. Here are some key elements of a package.json file<p>
   <br/>
   <ol>
     <li>
     Basic Metadata:
     <ul type="disc">
      <li>name: The name of the project</li>
      <li>version: the current version of your project</li>
      <li>description: a Brief description of the project</li>
      <li>main: The entry point of the application (e.g. index.js)</li>
      <li>script: Scripts that can be run using npm run (script-name)</li>
      <li>Keywords: An array of keywords that describe your project.</li>
      <li>author: The author of the project.</li>
      <li>license: The license under which the project is distributed.</li>
     </ul>
     </li>

     <li>
     Dependencies:
     <ul type="disc">
     <li>dependencies: package require for your project to run.</li>
     <li>devdependencies:package require for developer purpose only.</li>
     </ul>
     </li>

   </ol>
   
   </li>
   
   <li></li>

   <li></li>

 </ol>
</p>
