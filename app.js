const express = require('express')
const port = 8000
const app = express()
// app.set('view engine','ejs')
app.get('/',(req,res)=>{
    try {    
        res.render('home.ejs')
    } catch (error) {
        console.error(" error in to get home api ",error);
    }
})
app.get('/display.ejs',(req,res)=>{
    try {
        res.render('display.ejs')
    } catch (error) {
        console.error("error in to get display api",error);        
    }
})
app.listen(port ,() => console.log(`server run on ${port}` ))