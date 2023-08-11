// const http = require('http');
// http.createServer((req,resp)=>{
// resp.write("Hello this is a message");
// resp.end();
// }).listen(4500);
// import chalk from "chalk";
// console.log(chalk.blue('Hello world!'));
// console.log("step by step")
// const http = require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(201,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify(data))
//     resp.end();
// }).listen(5000);
const dbConnect = require('./mongodb');
//option 1
// dbConnect().then((resp)=>{
// resp.find({name : 'm 40'}).toArray().then((data)=>{
//     console.warn(data)
// })
// });
//option 2
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();