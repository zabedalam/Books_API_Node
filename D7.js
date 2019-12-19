/*

    Upgrade Strive Books API!

    You are in charge of including new features in the Strive Books API.
    You can start from the version we built this morning.

    A comment could be posted by a user to whatever project he likes.
    A comment is defined by:

    - CommentID //Server Generated
    - BookID //ASIN
    - UserName
    - Text
    - Date //Server Generated

    //BACKEND

    Add the following features:

    POST /books/id/comments => adds a comment for book {id}
    GET /books/id/comments => gets all the comments for book {id}
    DELETE /books/comments/id2 => delete comment {id2}

    //FRONTEND

    You need now to connect your previously created React App for Strive books.
    Modify the previous application in order to use your own API.

    //CLOUD

    Deploy everything on 2 instances on HEROKU (one for client, one for server)
    Configure CORS to make them work together.

*/