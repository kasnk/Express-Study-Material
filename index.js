const express = require("express");
const app=express();

//console.dir(app);

let port=8080;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
   // console.log(req);
    // console.log("Request received");
    // res.send({
        // name:"apple",
        // color:"red"
    // });
// });

app.get("/",(req,res)=>{
    res.send("Hello I am root");
});

app.get("/apple",(req,res)=>{
    res.send("You contacted apple path");
});

app.get("/orange",(req,res)=>{
    res.send("You contacted orange path");
});


app.get("/:username/:id",(req,res)=>{
    let {username, id}=req.params;
    let htmlstr=`<h1>Welcome @${username}</h1>`;
    res.send(htmlstr);
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("This is search page");
});
