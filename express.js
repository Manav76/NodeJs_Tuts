const express = require('express');
const path = require('path');
const app =  express();

// const publicPath = path.join(__dirname , 'public');
// //app.use(express.static(publicPath));
const reqFilter = (req,resp,next)=>{
   if(!req.query.age){
    resp.send("Please provide age")
   }
   else if(req.query.age<18){
resp.send("You cannot access this page")
   }
   else{
    next();
   }
   
}
app.use(reqFilter);
app.get('' , (req,res)=>{
    res.send('<h1>Hello, this is your home page</h1>');
});
app.get('/about' , (req,res)=>{
    res.send('Hello this is about page');
});
// app.get('/help' , (req,res)=>{
//     res.send(
//         `
//         <input type = "text" placeholder = "Enter Text" value = "${req.query.name}"/>
//         <button>Click Me </button>
//         `
//     )
// })
// app.get('/about' , (_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
app.listen(4500);