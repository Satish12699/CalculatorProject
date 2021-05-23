const express = require("express");
const bodyParse = require("body-parse");

const app = express();

app.use(bodyParse.urlencode({extended: true}));

app.get("/",function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+ num2;

    res.sendfile("The result of the calculation is:"+ result);
});

app.listen("4040",function(){

    console.log("This website works on 4040 port");
});
