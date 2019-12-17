const express = require("express")
const booksRouter=require("./src/books")
const commentsRouter=require("./src/comments")
const server= express()

const port = process.env.PORT || 4000

server.use(express.json())

console.log(port)

server.use("/books",booksRouter)

server.listen(port,()=>{
    console.log("I am listening on port" + port)
})

