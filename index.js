//requires is a function,used to import value
// get -->for retrieve the data
//'/'-->root url
var express=require("express");
var app=express();
app.get('/greeting',function(req,resp){
    resp.send("hello from API");
});
//parameterized routes
app.get('/wishes/:name',function(req,resp){
    var name=req.params.name;
    resp.send(`Hello ${name}`);
});

/*
app.get('/time',function(req,resp){
    var time=new Date().toLocaleTimeString();
    resp.send('Time is :${time}');

});
app.get('/date',function(req,resp){
    var date=new Date().toLocaleDateString();
    resp.send('Date is: $(date)');

});*/
app.listen(9000,()=>console.log("API started listening...."));