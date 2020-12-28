// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //express assumes all file are static except app.js and views file

app.set('view engine', 'ejs');

const items=[];
const workItems=[];
const date = require(__dirname +'/date.js');

app.listen(3000,function(){
    console.log("Server is running at port 3000.");
});

app.get('/',function(request,response){ 

    let day = date();
    response.render('List-f', {kindofday: day , ListOfItems :items, myRoute :"/"});
});


app.post('/',function(req,res){
    var item = req.body.newItem ;
    items.push(item);

    res.redirect('/');
})

app.get('/work' , function(request,response){
    response.render('List-f', {kindofday: "work List" , ListOfItems: workItems , myRoute :"/work"});
})

app.post('/work' , function(request,response){
    var item = request.body.newItem ;
    workItems.push(item);
    
    response.redirect('/work');
})

app.get('/about' ,function (req,res) {
    res.render('about');
})