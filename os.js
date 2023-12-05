// var http = require('http')


// http.createServer( function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write("welcome back")
//     res.end()
// }).listen(8088)


// ---------------------------------------------------------------

// var calc = require('./calc.js')


// var answer = calc.add(5,6)
// var answerr = calc.sub(5,6)

// console.log(answer)
// console.log(answerr)

// -----------------------------------------------------------------

// var fs = require('fs')

// fs.readFile('calc.js','utf-8',function(err,data){
//     console.log(data)
// })


// fs.appendFile('calc.js','console.log("append done")',function(err){
//     console.log('it is appended')
// })

// fs.unlink('calc1.js',function(err){
//     console.log("deleted")
// })


// ------------------------------------------------------------


// const express = require('express')

// const app = express();


// app.get('/',function(req,res){
//     res.send("Hello world")
// })

// app.get('/alien',function(req,res){
//     const id = req.query.id
//     res.send("welcome back alm  ien "+id)
// })
// app.get('/alien/:id',function(req,res){
//     const id = req.params.id
//     res.send("your id is " +id)
// })

// app.listen(9000);


// ----------------------------------------------------------


const oss = require('os')

const user = oss.userInfo()

console.log(user)

console.log(`the uptime is ${oss.uptime()} seconds`)

const currentOS ={
    name : oss.type(),
    release : oss.release(),
    totalmenu : oss.totalmem(),
    freemenu : oss.freemem()
}

console.log(currentOS)
