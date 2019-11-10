let expres = require('express');
let ta = expres();
let url = require("fs")
let student=[];
let arr;
url.readFile(__dirname+'/students.txt' , 'utf8' , (error , data)=>{
    if(error){
        console.log("error")
    }else{
        student = JSON.parse(data);
        console.log(student);
    }
})
let pageSize=5;
ta.get('/students' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
});
ta.get('/students/:thamer' , (req , res)=>{
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.url.split("/")[2];
    let start = (page-1)*pageSize;
    let end = start + pageSize;
    res.send(students=student.slice(start,end));
});
ta.listen(4000);
