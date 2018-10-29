var express = require("express")
var app = new express()
var bodyParser = require("body-parser")
app.use (bodyParser.json())
app.use (bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res){
  var form = '<!DOCTYPE html>\
  <html lang="en">\
  <head>\
    <meta charset="UTF-8">\
    <title>form</title>\
  </head>\
  <body>\
  <form class="" action="page_test" method="post">\
    <input type="text" name="text" value=""/>\
    <button>Нажми</button>\
  </form>\
  </body>\
  </html>'



  res.send(form)
})

app.listen("3000", function (){
  console.log("server v dele")
})
app.post ("/our_post",function (req,res) {
  console.log(req.body)
  res.send ("Hello ot servera vot vash vvod: "+req.body.text)
})
