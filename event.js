 const EventEmitter=require("events");

 const myEmitter=new EventEmitter();
 myEmitter.on('newsale',()=>{
    console.log('there was new sale!')
 })
 myEmitter.on('newsale',()=>{
    console.log("customer:name")
 });
 myEmitter.on('newsale',(stock)=>{
    console.log(`There are you ${stock} item left in stock`);
 });

 myEmitter.emit("newsale",9);