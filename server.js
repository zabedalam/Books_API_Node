const express = require("express")
const booksRouter=require("./src/books")
const commentsRouter=require("./src/comments")
const customerRouter=require("./src/customers")
const server= express()

const port = process.env.PORT || 4000

server.use(express.json())

console.log(port)

server.use("/books",booksRouter)
server.use("/customers",customerRouter)

server.listen(port,()=>{
    console.log("I am listening on port" + port)
})

