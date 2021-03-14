const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:AdminUser123@cluster0.i5gbr.mongodb.net/AgriBazzar?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;
// DB Connection logic import
const { initialize } = require('./dbconnection');
//make object of express so that we can use methods
let app = express();
let dbobj;
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


initialize('AgriBazzar', (db)=>{
    dbobj = db;
},(err)=>{
    console.log("Error while connecting to db", err)
})



const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
};


app.get('/',(req,res) => {
    let errmessage = req.query.errmessage?req.query.errmessage:'';
    let successmessage = req.query.sucmessage?req.query.sucmessage:'';
    res.render('pages/login',{errmessage:errmessage,successmessage:successmessage})
})

app.get('/register',(req,res) => {
    let errmessage = req.query.errmessage?req.query.errmessage:'';
    res.render('pages/register',{errmessage:errmessage})
})


//Register User
app.post('/register',(req,res) => {
    let user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role?req.body.role:'user',
        isActive:true
    }
    dbobj.collection('users').findOne({email:user.email},(err,data) => {
        if(data){
            return res.redirect("/register?errmessage=Email Already Taken Added")  
        }else{
            dbobj.collection('users').insert(user,(err,data)=>{
                if(err) throw err;
                //return res.send("Data Added")
                res.redirect("/?sucmessage=Successfully Register")  
            })
        }
    })
});

//editUser
app.put('/edituser',(req,res) => {
    console.log(req.body)
    let status;
    if(req.body.isActive){
        if(req.body.isActive=='true'){
            status=true
        }else{
            status=false
        }
    }else{
        status=false
    }

    dbobj.collection('users').update(
        {_id:mongodb.ObjectID(req.body._id)},
        {
            $set:{
                name:req.body.name,
                email:req.body.email,
                role:req.body.role?req.body.role:'user',
                isActive:status
            }
        },(err,result) =>{
            if(err) throw err;
            res.send('Data Updates')
        }
    )
});

//login
app.post('/login',(req,res) => {
    let user={
        email:req.body.email,
        password:req.body.password
    }
 
    dbobj.collection('users').findOne(user,(err,data) => {
        if(err || !data){
            return res.redirect('/?errmessage=Invalid Login! Please Try Again')
        }else{
            //save data in session
            /*if(req.session.user.email = data.email){
                
            }*/
            req.session.user = data;
            console.log(req.session.user)
            console.log("login>>>",req.session)
            //return res.send(data)
            res.redirect('/post')
        }
    })
})

app.get('/chlogin', (req,res)=>{
    let errmessage = req.query.errmessage?req.query.errmessage:'';
    let successmessage = req.query.sucmessage?req.query.sucmessage:'';
    res.render('pages/change-password',{errmessage:errmessage, successmessage:successmessage})
})
// change password
app.post('/chlogin',(req,res) => {
    let user={
        cpassword:req.body.cpassword,
        password:req.body.password,
        cnfpassword: req.body.cnfpassword,
    }
    if (!req.session.user){
        return res.redirect('/chlogin?errmessage=You must be logged in to changed password')
    }

    if (req.body.cnfpassword !== req.body.password){
        return res.redirect('/chlogin?errmessage=New and Confirm pssword should be same')
    }
    dbobj.collection('users').findOne({email: req.session.user.email},(err,data) => {
        if(err || !data){
            return res.redirect('/chlogin?errmessage=Invalid Login! Please Try Again')
        }
        else{
            //save data in session
            if (data.password == req.body.cpassword){
                dbobj.collection('users').updateOne({email:req.body.email},{$set: {password: req.body.newPassword}})
                res.redirect('/chlogin?successmessage=successfully updated')
            }else {
                return res.redirect('/chlogin?errmessage=Current password does not match, please enter correct password')
            }
            
        }
    })
})

//all users
app.get('/allUsers',(req,res) => {
    console.log("session>>>",req.session)
    if(!req.session.user){
        return res.redirect('/?errmessage=No Session Found! Please Login Again')
    }
    if(req.session.user.role !=="Admin" && req.session.user){
        return res.redirect('/post?errmessage=You are Not Admin')
    }
    dbobj.collection('users').find().toArray((err,data)=>{
        //return res.send(data)
        res.render('users',{data:data,userdata:req.session.user})
    })
});

//usersbyid
app.get('/userbyid',(req,res) => {
    console.log("session>>>",req.session)
    if(!req.session.user){
        return res.redirect('/?errmessage=No Session Found! Please Login Again')
    }
    if(req.session.user.role !=="Admin" && req.session.user){
        return res.redirect('/post?errmessage=You are Not Admin')
    }
    let query ={}
    if(req.query.id){
        query={_id:mongodb.ObjectID(req.query.id)}
    }
    dbobj.collection('users').findOne(query,(err,data)=>{
        return res.send(data)
    })
});


//logout
app.get('/logout',(req,res) => {
    req.session.user = null;
   //return res.send('Logout Success')
   res.redirect('/')
})

// search 
app.get('/search', asyncMiddleware(async(req,res)=>{
    let response = await dbobj.collection('search').find({}).toArray();
    console.log(response);
    res.send(response)
}))






app.listen(port,(err) => {
    if(err) throw err;
    console.log(`App is running on port ${port}`)
})






