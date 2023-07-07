const express = require('express');
const app =  express();
app.get('' , (req,res)=>{
    res.send('Hello, this is your home page');
});
app.get('/about' , (req,res)=>{
    res.send('Hello this is about page');
});
app.get('/help' , (req,res)=>{
    res.send('This is your help page')
})
app.listen(5000);