let a = 20;
let b =10;
// setTimeout(()=>{
//     b=30
// } , 2000);
// console.log(a+b);
//Handling async
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})
waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})