const { promises } = require("dns");
const fs =require("fs");
const { resolve } = require("path");
const superagent=require("superagent")
const readFilepro=file=>{
    return new Promise((resolve,reject)=>{
    //     fs.readfile(file,(err,data)=>{
    //         if (err) reject('I could not find that file')
    //         resolve(data);
    // });
});
};
const writeFilepro=(file,data)=>{
    return new promise((resolve,reject)=>{
        fs.watchFile(file,data,err=>{
            if(err) reject('could not wright file');
            resolve('success');
        })
    })
}
const getDogpic=async()=>{
    try{
       const data = await readFilepro(`${__dirname}/doc.txt`);
       console.log(`Breed: ${data}`);

       const res=await superagent.get(`https://dog.ceo/api/breed/${data}/image/random`)
       console.log(res.body.message);
       await writeFilepro('dog-img.txt',res.body.message);
       console.log('Random dog image saved to file')
    }catch(err){
        console.log(err);
    }
}
console
getDogpic();
/*
  readFilepro(`${__dirname}/doc.txt`).then(data=>{
    console.log(`Breed: ${data}`);
     return superagent
      .get(`https://dog.ceo/api/breed/${data}/image/random`)
  }).then(res=>{
        console.log(res.body.message);

        return writeFilepro('dog-img.txt',res.body.message)
        //     fs.writeFile('dog-img.txt',res.body.message,err=>{
        //     if (err) return console.log(err.message);
        //     console.log("Rondom dog image saved to file!");
        //    });
        })
        .then(()=>{
        console.log("Rondom dog image saved to file!");
 
        })
      .catch(err=>{
        console.log(err);
      })
      */

    
