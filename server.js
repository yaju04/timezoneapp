var express        = require("express");
var bodyParser     = require("body-parser");
var moment =require("moment-timezone");


var app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res){
  var list =moment.tz.names();
  var zoneList=[];
 for(i in list){

  //console.log(moment.tz(list[i]).zoneAbbr());
  if(zoneList.indexOf(list[i])==-1){
  zoneList.push(list[i]);
    }
 }
  res.render('index.ejs',{zonelist:zoneList});
  
});

app.post('/getTimezoneTime', function(req, res){
  var currentZone=req.body.currentZone;
  var servertime=req.body.servertime;
  var zonelist=req.body.zonelist;

  res.render('time.ejs',{currentZone:currentZone,servertime:servertime,zonelist:zonelist});

});


app.listen(8080,function(){
  console.log("Started on PORT 8080");
})