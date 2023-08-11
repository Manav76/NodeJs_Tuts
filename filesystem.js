const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
//const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath, 'This is a simple text file');
// fs.readFile(filePath,'utf8' , (err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })
// fs.rename(filePath , `${dirPath}/fruit.txt` , (err)=>{
//     if(!err) console.log('file is updated')
// })
//unLinkSyncfor delete
// for(i=0;i<5;i++){
//     const fileName = `hello${i}.txt` ;
//     const filePath = path.join(dirPath ,fileName);
//     fs.writeFileSync(filePath, "a simple text file");
// }
fs.readdir(dirPath,(err,files)=>{
    if(err){
        console.log("Error reading the file" , err);
        return;
    }
    // files.forEach((item)=>{
    //     console.log("file name is" , item);
    // })
    console.log("File names in the directory" , files);
})