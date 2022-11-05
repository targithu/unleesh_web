const express = require("express");
const app=express();
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
const query=req.body.cityname;
    const apikey="769264ba561c95498095fbe2d6602ff9";
    const units="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units;
    https.get(url,function(response){
console.log(response);
response.on("data",function(data) {
    const weatherdata=JSON.parse(data);
    const temp=weatherdata.main.temp;
const desc=weatherdata.weather[0].description;
res.send("<h1>The temperature in "+query+" is "+temp+" degree celsius.</h1>");
console.log(desc);
})
    })
})
app.listen(3000,function(){
console.log("server is running on port 3000");
})