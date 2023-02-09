// const express = require('express');
// const multer = require('multer');
// const app= express();

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req, file,cb){
//             cb(null,"upload")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+"-"+Date.now()+",jpg")
//         }
//     })
// }).single("user_file");
// app.post("/uploa",upload,(req,res)=>{
//     res.send("file uploads")
// })
// app.listen(5000)

// const os = require('os');
// // console.log(os.arch());
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.userInfo())


const express = require('express');
const cors=require("cors")
const path = require('path');
const app = express();
const con=require('./my');
// app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
    con.query("select *from users",(err,result)=>{
        if(err)
        {
            res.send("error")
        }else{
            res.send(result)
        }
    })
})

app.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname,"contact.html"))
})

const bodyParser = require('body-parser');
app.use('/assets', express.static('assets'))

app.use(express.urlencoded());
app.use(bodyParser.json());

app.post('/contact',(req,res)=>{
    // const data ={ id:'2',name:"atf",password:'309',user_type:"vecitor"};
    // con.query('INSERT INTO users SET ?',data,(error,result,fields)=>{
    //     if(error) throw error;
    //     res.send(result)
    // })
     // console.log(req.body)
    const name= req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
    const your=req.body.your;
    con.query('INSERT INTO users (name,phone,email,your) VALUES (?,?,?,?)',[name,phone,email,your],(err,result)=>{
        if(err) 
        {
            res.send("error")
        }else{
            res.send(`<h1>Thank You</h1>`)
        }
    })
    
})

app.put("/",(req,res)=>{
    const {phone ,email, your}=req.body;
    const sql = `UPDATE users SET phone = '${phone}', email = '${email}' WHERE name = 'ritesH'`;
    con.query(sql,(error,result)=>{

        if(error) throw error;
        //res.send(result)
    })
    res.send("update api working")
})
app.delete("/",(req,res)=>{
    con.query("DELETE FROM users WHERE name",(error,result)=>{
        if(error) throw error;
        //res.send(result)
    })
    res.send("wersfd")
})
app.listen(3009)