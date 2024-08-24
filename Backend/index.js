const express=require('express');

const app=express();
const cors=require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, // This allows the server to accept credentials from the client
};

app.use(express.json());
app.use(cors(corsOptions));


const db=require('./models');
const userrouter=require('./routes/entry');
const usersignup=require('./routes/signup');
const signin=require('./routes/signin')

app.use("/entry",userrouter);

app.use("/signup",usersignup);

app.use("/signin",signin);








db.sequelize.sync().then(()=>{
    app.listen(3003,function(){
        console.log("server is running on port 3003")
    
    
        //when we run an api or server it is the entering point of code, it means when server starts it goes in models and find which tables are not created in database and then creates database.
    
    })
    }).catch(error => {
        console.error("Unable to start the server:", error);
    });