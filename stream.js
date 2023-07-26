const fs=require('fs');
const server=require("http").createServer();

server.on('request',(req,res)=>{

    fs.readFile("test-file.txt",(err,data)=>{
        if (err)console.log(err);
        res.end(data);
    });

    const readable=fs.createReadStream('./test-file.txt')
    readable.on('data',chunk =>{
    res.write(chunk);
    })
    readable.on('end',()=>{
        res.end();
    });
    readable.on('error',err=>{
        console.log(err);
        res.statusCode=500;
        res.end('file not found');
    })

   
const writableStream = fs.createWriteStream('output.txt');
const data = ['come down,','backed node process','writable stream .'];
data.forEach((line) => {
  writableStream.write(line + '\n');
});
writableStream.end();
writableStream.on('finish', () => {
  console.log('Data has been written to the file.');
});
writableStream.on('error', (err) => {
  console.error('Error writing data to file:', err);
});

});
server.listen(8000,()=>{
    console.log('listing server......');
});