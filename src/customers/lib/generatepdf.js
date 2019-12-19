//  const express=require("express")
const {join}=require("path")
const pdfPrinter=require("pdfmake")
const fs = require("fs-extra");

const generatePDF=()=> new Promise((resolve,reject)=>{
try{
    var fonts = {
        Roboto: {
            normal: "Helvetica",
            bold: "Helvetica-Bold",
            italics: "Helvetica-Oblique",
            bolditalics: "Helvetica-BoldOblique"
        }
      };
const printer=new pdfPrinter(fonts)
const docDefinition = {
    content: [
        { text: "Tables", style: "header" },
        "Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.",
        {
          text:
            "A simple table (no headers, no width specified, no spans, no styling)",
          style: "subheader"
        },
        "The following table has nothing more than a body array"
      ]
    // ...
  };
  const pdfDoc = printer.createPdfKitDocument(docDefinition,{});
  pdfDoc.pipe(fs.createWriteStream(join(__dirname,'document.pdf')));
  pdfDoc.end();
resolve()
}
catch(error)
{
reject(error)
}
})



module.exports=generatePDF