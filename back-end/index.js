
// console.log('asdas')
// const express = require("express");
// const app = express();
// const util = require("util");
// const port = 3000;
// const fs = require("fs");
// app.get('/', (req, res) => {
//     res.send("Hello world")
// })

// app.post('/', (req, res) => {
//     res.send("Got a POST request")
//     // })

//     app.put('/user', (req, res) => {
//         res.send("Got a PUT request at/user")
//     })

//     app.get('/user/:userID/books/:bookId', (req, res) => {
//         res.send(`<h1>${req.params.bookId}</h1>`)
//     })

//     app.get('/users/:userID/', (req, res) => {
//         res.send(`<h1>${req.params.userID}</h1>`)
//     })

// app.get("/users/:userID/", (req, res) => {
//     const user_id = req.params.userID;
//     const readFile = util.promisify(fs.readFile);
//     readFile("./user.json")
//         .then((text) => {
//             const data = JSON.parse(text.toString("utf8"));
//             data.map((dt) => {
//                 console.log(dt.userId)
//                 if (dt.userId.toString() === user_id.toString()) {
//                     res.send(dt);
//                 }
//             });
//             res.send("not found");
//         })
//         .catch((err) => {
//             console.log("Error", err);
//         });
// });
// app.get("/foods", (req, res) => {
//     const category = req.query.category;
//     let aa = [];
//     const readFile = util.promisify(fs.readFile);
//     readFile("./foods.json")
//         .then((text) => {
//             const data = JSON.parse(text.toString("utf8"));
//             data.map((dt) => {
//                 if (dt.category.toString() === category.toString()) {
//                     aa.push(dt)
//                 }
//             });
//             res.send(aa);
//         })
//         .catch((err) => {
//             console.log("Error", err);
//         });
// });


//     app.get('/users/:userID.:userName/', (req, res) => {
//         res.send(`<h1>${req.params.userID} ${req.params.userName}</h1>`)

//     })


// app.get('/users/:userID-:userName/:space', (req, res) => {
//     res.send(`<p>${req.params.userID} to  ${req.params.userName} ${req.params.space}km </p>`)

// })
// app.get('/library/', (req, res) => {
//     res.send(`<p> userid  =  ${req.query.userID} , bookid = ${req.query.bookID} </p>`)

// })
const express = require("express");
const app = express();
const fs = require("fs");
const port = 3001;
const cors = require("cors")
// app.use(express.json());
app.use(express.static('public'));


var corsOption = {
    origin: '*',
    optionSuccessStatus: 200
}

const info = {
    name: "BAYANBAT NERGUI",
    major: " FULLSTACK DEVELOPER",
    birthday: "28th January, 1999",
    number: "+976 86785565",
    email: "Bayanbatnergui6@gmail.com",
    location: "Ulaanbaatar Mongolia"
}
app.use("/", cors(corsOption), (req, res) => {
    res.json(info)
})
app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})
console.log("request failed")












// app.listen(port, () => {
//     console.log(`example app listening at https://localhost:${port}`);
// });
