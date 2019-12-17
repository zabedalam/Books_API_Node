const express=require("express")
const fs=require("fs-extra")
const path=require("path")
const {check,validationResult,sanitizeBody}= require("express-validator")
const booksJsonPath=path.join(__dirname,"books.json")

const getBooks=async()=>{
    const buffer=await fs.readFile(booksJsonPath)
    return JSON.parse(buffer.toString())
}
const router=express.Router()

router.get("/",async (req,res)=>{
    res.send(await getBooks())
})

router.get("/:asin",async(req,res)=>{
    const books=await getBooks()
    const book=books.find(b=>b.asin===req.params.asin)
    if(book)
    res.send(book)
    else
    res.status(404).send("Bookd not found")
})

router.post("/",
[check("asin").exists().withMessage("please specify the asin"),
check("title").exists().withMessage("Title is required"),
check("category").exists().withMessage("Category is required"),
check("price").isNumeric().withMessage("price should be a number"),
check("img").exists().withMessage("Img is required"),
sanitizeBody("price").toFloat()],
async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
    return res.status(400).send(errors)

    const books=await getBooks()
    const asinCheck = books.find(x => x.asin === req.body.asin) 
    if (asinCheck) 
        res.status(500).send("ASIN should be unique")
    books.push(req.body)
    await fs.writeFile(booksJsonPath, JSON.stringify(books))
    res.status(201).send("created")

})

router.put("/:asin",async(req,res)=>{
    const books=await getBooks()
    const book=books.find(b=>b.asin===req.params.asin)
    if(book){
        const position=books.indexOf(book)
        const bookUpdated=Object.assign(book,req.body)
        books[position]=bookUpdated
        await fs.writeFile(booksJsonPath,JSON.stringify(books))
        res.status(200).send("updated")
    }
    else
    res.status(404).send("not found")
})

router.delete("/:asin", async(req,res)=>{
    const books =await getBooks()
    const booksToBeSaved=books.filter(x=>x.asin!==req.params.asin)
    if(booksToBeSaved.length===books.length){
        res.status(404).send("can not find book " + req.params.asin)
    }
    else
    await fs.writeFile(booksJsonPath,JSON.stringify(booksToBeSaved))
    res.send("Deleted")
})

module.exports=router