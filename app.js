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
    <title>Document</title>\
  </head>\
  <body>\
  <form action="" method="post">\
    <input type="text" style="font-size:24px;"/>\
    <button>Нажми</button>\
  </form>\
  </body>\
  </html>'



  res.send(form)
})

app.listen(3000)
app.post ("/our_post",function functionName(req,res) {
  res.send ("<div style='font-size: 24px'>Ответ на пост запрос</div>")

})
