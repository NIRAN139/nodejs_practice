const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
    res.end("Welcome Home page")
   
    }
    else if(req.url === '/about'){
    res.end("About Page")
        
    }
    else{
        res.end(`
        <h1> Niranjan</h1>
        `)
    }
   
})

server.listen(4000)