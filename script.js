const http = require("http")
const fs = require("fs")



const server = http.createServer((req,res)=>{
console.log(req.url )
let contentT ="text/html"

res.setHeader("Content-Type",contentT)

let path = "./views/"

switch(req.url){
   case "/":
      path += "index.html"
      contentT="text/html"
      break
    case "/about":
        path += "about.html"
        contentT="text/html"
        break
        case "/styles.css":
        path += "styles.css"
        contentT="text/css"
        break
    default:
        path += "404"
        contentT="text/html"
    


}

fs.readFile( path, (err,data)=>{
if(err){
    console.log(err)
    res.end()
}else{
    res.write("hello")
    res.end()
}
})

} )

server.listen(3010,"localhost",()=>{
    console.log(" (Port:3000) listening for requests")
} )

