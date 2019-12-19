/*

    Upgrade Marketplace API!

    You are in charge of including new features in the Marketplace API. You should concentrate on backend stuff, when finished implement frontend.


    //BACKEND

    Add the following endpoints/features:

    GET /products/:id/exportToPDF => converts single product data into a PDF and sends to client as a downloadable file. [EXTRA] style properly the PDF and add product's image.
    GET /products/exportToCSV => exports list of products in form of a CSV file AND as an attachment to an email using SendGrid
    GET /products/sumTwoPrices => pass two product IDs in req.query, the route should use them to get the prices of the two products and calculate the sum by contacting the following end-point:
    http://www.dneonline.com/calculator.asmx?op=Add (ONLY INTEGER ALLOWED, SO CONVERT TO INTEGER NUMBERS IF NEEDED). Both request and response are gonna be in XML format, so you should create XML with data
    for the request and when you get the response you have to parse the response to JSON and send it back to the caller. (I'm totally aware that doing a sum in this way is sooo stupid, but it's an XML 
    excercise of course ;) )
    

     //FRONTEND

    - Add a button in product's detail page to download product details as a PDF
    - Add a button in products' list to download the list as a CSV file


*/