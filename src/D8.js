/*
    You are in charge of developing an EventBrite clone app, a very famous event management and ticketing website.
    //FRONTEND (Do backend first)
    A user goes on the main page and finds a simple form to insert his own personal data to book the tickets for the event called "Diego's Birthday".
    Attendees' data will include:
        - ID
        - First Name
        - Second Name
        - Email
        - Time of Arrival (a string is ok)
    //BACKEND
    You are in charge of building the Backend using NodeJS + Express. Today we want you to study the documentation of PDFMAKE (https://www.npmjs.com/package/pdfmake). The backend shall include at least the following routes:
    POST /attendees/ => add a new participant to the event. After successfully saving the participant in a file on disk, the backend will save the ticket in form of a PDF file on disk as well
    GET /attendees/csv => this route must return full list of attendees exported as a CSV file (use stream from json2csv npm module)
    You must configure your projects to use ENV VARS. Put api keys, port numbers and api url in an .env file
*/