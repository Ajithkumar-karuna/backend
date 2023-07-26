const http =require("http");

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/html");
    res.end(`<h1>hello world</h1>`)
});
server.listen(8000,()=>{
    console.log("server running on http://localhost:8000")
});