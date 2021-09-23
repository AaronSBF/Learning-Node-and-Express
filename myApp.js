var express = require('express');
var app = express();
//Use body-parser to Parse POST Requests
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


console.log('Hello world');

app.use("/", function(req, res, next){ 
    console.log(req.method+" "+req.path+" - "+ req.ip);
    next();
    })


    app.get("/now", 
    function(req, res, next){ 
        req.time = new Date().toString();
          next();
        }, 
        
        function(req, res){ 
        res.send({time: req.time})})
        


app.get("/", function(req, res){ 
    res.sendFile(__dirname+ "/views/index.html") 
    });
    
    app.use("/public", express.static(__dirname + "/public") );


    app.get('/json',function(req,res){
        if(process.env.MESSAGE_STYLE ==="uppercase"){
        res.json({
        "message":"HELLO JSON"
        })
        }
        else {res.json({
        "message":"Hello json"
        })}
        });

        // 9)Get Route Parameter Input from the Client

app.get("/:word/echo", function(req, res){ 
    const {word} = req.params;
    res.json({echo: word})
    
    })
        

    //Get Query Parameter Input from the Client
    app.get("/name", function(req, res) {
        var firstName = req.query.first;
        var lastName = req.query.last;
        // OR you can destructure and rename the keys
        //var { first: firstName, last: lastName } = req.query;
        // Use template literals to form a formatted string
        res.json({
          name: `${firstName} ${lastName}`
        });
      });


      //Get Data from POST Requests
app.post("/name", (req, res)=> { 
    var string = req.body.first+ " "+req.body.last;
    res.json({name: string})
    })
      
    
        
































 module.exports = app;
