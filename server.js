var express = require('express')
var app = express()
var x = process.env.PORT || 3000
app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',function(req,res){
	res.render('index.ejs')
})
app.get('/:id',function(req,res){
	var unix_timestamp = req.params.id
	// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
  if(unix_timestamp.indexOf(' ')<0){
var date = new Date(unix_timestamp*1000);
var mon ;
switch(date.getMonth()+1){
	case 1:
	mon = 'January'
	break;
	case 2:
	mon = 'February'
	break;
	case 3:
	mon = 'March'
	break;
	case 4:
	mon = 'April'
	break;
	case 5:
	mon = 'May'
	break;
	case 6:
	mon = 'June'
	break;
	case 7:
	mon = 'July'
	break;
	case 8:
	mon = 'August'
	break;
	case 9:
	mon = 'September'
	break;
	case 10:
	mon = 'October'
	break;
	case 11:
	mon = 'November'
	break;
	case 12:
	mon = 'December'
	break;
	default :
	mon =null;
	break;
}
if(mon == null){
	var formattedTime = null;
unix_timestamp = null;}
else
var formattedTime =  mon+" "+date.getDate() + ', ' + date.getFullYear();}
  else{
    var str = unix_timestamp;
    var mon = str.substring(0,str.indexOf(' '))
    var date = str.substring (str.indexOf(' '),str.indexOf(','))
    var year = str.substring(str.indexOf(',')+2)
    var s = year+"."+mon+"."+date
   formattedTime=unix_timestamp.replace('.',',')
    unix_timestamp = new Date(s).getTime()/1000
   if(!unix_timestamp)
     formattedTime=null
  }
	var data= { "unix": unix_timestamp, "natural": formattedTime}
	res.send(JSON.stringify(data))
})
app.listen(x)
console.log("You are listening to port "+x)
console.log(new Date('2012.08.10').getTime() / 1000)