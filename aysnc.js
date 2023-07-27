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
       const res2=await superagent.get(`https://dog.ceo/api/breed/${data}/image/random`)
       const res3=await superagent.get(`https://dog.ceo/api/breed/${data}/image/random`)
      const all=await promise.all([res,res2,res3]);
      const imgs =all.maps(el=>el.body.message);
      console.log(all);
       console.log(res.body.message);
       
       await writeFilepro('dog-img.txt',imgs.join('\n'));
       console.log('Random dog image saved to file')
    }catch(err){
        console.log(err);
        throw err;
    }
    return '2:Ready';
};
(async()=>{
try{
    console.log('1: will get doc pics!');
    const x=await getDogpic();
    console.log(x);
}catch(err){
  console.log(Errror);
}
})();
/*
console.log('1: will get doc pics!')
getDogpic()
.then(x=>{
console.log(x);
 console.log('3:Done getting Dog picks!')
})
.catch(err=>{
    console.log('Error');
})*/

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

    
