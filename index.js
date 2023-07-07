// const http = require('http');
// http.createServer((req,resp)=>{
// resp.write("Hello this is a message");
// resp.end();
// }).listen(4500);
// import chalk from "chalk";
// console.log(chalk.blue('Hello world!'));
// console.log("step by step")
const http = require('http');
const data = require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(5000);