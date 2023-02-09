
// const express = require("express");
// const path = require("path");
// const app = express();
// const port=80;
// // app.use('/static', express.static('static')) 
// app.get("/shop", (req,res)=>{
//     res.status(200).render('shop',{ title: 'hey harry'})
// });
// app.listen(port,()=>{
//     console.log(`this is application started succesfullu on port ${port}`);
// })

const { application } = require("express");

// const http = require('http');
// http.createServer((req,res)=>{
//     res.write( "hello this is anil sidi");
//     res.end();
// }).listen(4500);

// const data=require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5500);

// const fs = require('fs');
// //fs.writeFileSync('aple.txt','htisi is s a pa')
// //loop
// const path = require('path');
// const dirPath= path.join(__dirname,'crud');
// const filePath =`${dirPath}/apple.txt`;
//crud operation, create.......
//fs.writeFileSync(filePath,'a simple yjrdy');
//read files.....
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// });

// //update files....
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is update")
// })

//rename.........
// fs.rename(filePath,`${dirPath}/frit.txt`,(err)=>{
//     if(!err) console.log('file name is updated');
// })  
// delet...
// fs.unlinkSync(`${dirPath}/frit.txt`)



// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     console.log("data name",req.query.name)
//     res.send('welcome'+req.query.name);
// })
// app.get('/about', (req,res)=>{
//     res.send('hello, this is about page');
// })
// app.get('/help',(req,res)=>{
//     res.send('this is about one only pafgge');
// })
// app.listen(5000 )



// const express = require('express');
// const app = express();

// app.get('/help',(req,res)=>{
    
//     res.send(`
//         <button ><a href="/about">good morning</a></button>
//     `);
// })
// app.get('/about', (req,res)=>{
//     res.send(`<button><a href='/help'>good night</a></button>`);
// })
// app.get('',(req,res)=>{
//     res.send('this is about one only pafgge');
// })
// app.listen(5000)




// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath=path.join(__dirname);

// app.use(express.static(publicPath));


// app.listen(5000);


// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath=path.join(__dirname);

// app.get('',(req,res)=>{
    
//     res.sendFile(`${publicPath}/shop.html`);
// })
// app.get('/blog',(req,res)=>{
     
//     res.sendFile(`${publicPath}/blog.html`);
// })
// app.listen(5000 )




// const express = require('express');
//  const app = express();

//  app.get('',(req,res)=>{
//     res.send('')
//  })

// app.listen(5000 )


//// mangodb.............................
// const {MongoClient}= require('mongodb');
// const url='mongodb://localhost:27017';
// const client= new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     result.db('sdfsf');

// }
// getData();
        //  //promose handle// getData() .then((res)=>{
        //   res.find().toArray().then((data)=>{
            // console.warn(data)
        // })
        //  })



//API.................
//  const express = require('express');
//  const app = express();
// app.use(express.json());

//  app.get('/', (req,res)=>{
//     res.send([
//         {name:'Ritesh Chaurasiya'},
//         {name:'Ritesh Chaurasiya'},
//     {
//         mobile: 6934583948
//     }
//     ])
//     app.post('/',(req,res)=>{
//         console.log(req.body)
//         res.send({name:'ritesh'})
//     })
//  })
//  app.listen(5000)



//mongoose.........................................
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// mongoose.set('strictQuery', false);
// const main=async ()=>{
//     await mongoose.connect("mongodb://localhost:27017/newdb")
//     const ProductSchema = new mongoose.Schema({
//         name:  Stirng,

//     });
//     const productModel=mongoose.model('products',ProductSchema)
//     let data = new productModel({name:"m8"});
//     let result = await data.save();
//     console.log(result)
// }
// main();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);
const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/newdb")
    const ProductSchema = new mongoose.Schema({
        name:  Stirng,

    });
    const productModel=mongoose.model('products',ProductSchema)
    let data = new productModel({name:"m8"});
    let result = await data.save();
    console.log(result)
}
main();