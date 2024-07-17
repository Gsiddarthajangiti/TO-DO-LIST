const express= require('express');
const mongoose=require('mongoose');
const BrandName=require('./model');
const app = express();
const cors= require('cors')
app.use(express.json());
app.use(cors({
    origin:'*'
}))
app.get('/',(req,res)=>{
    res.send("<h1>Gowtham Siddartha</h1>");
})
mongoose.connect('mongodb+srv://gowthamjangiti4:gowthamjangiti4@bcoding.pkafhel.mongodb.net/?retryWrites=true&w=majority&appName=Bcoding'
).then(
    ()=>console.log("Db connected")
).catch(err=>console.log(err))
app.post('/addbrands',async (req,res)=>{
    const {brandname}=req.body;
    try{
       const newData=new BrandName({brandname});
       await newData.save();
       return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)
    }
})
app.get('/getallbrands',async (req,res)=>{
    try{
        const allData = await BrandName.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
})
app.delete('/deletebrand/:id',async (req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id);
        return res.json(await BrandName.find());

    }
    catch(err){
        ()=>{
            console.log(err.message)
        }
    }

})
app.listen(5000,()=>{
    console.log("server running..")
})
