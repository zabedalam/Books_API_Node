const express=require("express")
const generatePDF = require("./lib/generatepdf");

const router=express.Router()

router.get("/pdf",async(req,res)=>{
try{
await generatePDF()
res.send("ok")
}
catch(error){
Console.log(error)

}
})

module.exports=router