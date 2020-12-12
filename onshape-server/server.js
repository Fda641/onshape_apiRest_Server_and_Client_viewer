const express = require("express");
const app = express();
const cors = require("cors"); // Cross-origin resource sharing
const appOS = require("./lib/app");

const path = require("path");

// file txt
const fs = require('fs');
let myFile = {
  Path: "./storage-file-stl/", // Path -> folder file .stl,
  Filename: "data",
  extension: ".stl",
};

// config dotenv
const myKeys = require('./config/apikey.js');


//Routes
//app.set('routerrr', path.join(__dirname));

//Settings
//app.set('port', process.env.PORT || 3000);
app.use(cors({ origin: "http://localhost:8000" }));

app.get("/", function (req, res) {
  res.send("Hello World");
});


//Part Studio 1
app.get("/stl", function (req, res) {
  const stl = appOS.partStudioStl(
      myKeys.documentId, myKeys.workspace_W_Id, myKeys.workspace_E_1_Id, { mode: "string" },
    
    // print data browser
    function (data) {
      //console.log(data.toString());
      res.send(data);

      // Create file in folder storage-file-stl
      fs.writeFileSync(`${myFile.Path+myFile.Filename+myFile.extension}`, data, function (err) {
        if (err) return console.log(err);
        console.log('Error > ' + `${myFile.Filename+myFile.extension}`);
      });

    }
  );
});

//Part Studio 2
/*
app.get("/stl1", function (req, res) {
  const stl = appOS.partStudioStl(
    myKeys.documentId, myKeys.workspace_W_Id, "24224bb37e5743e63aabfa95", { mode: "string" },
    
    function (data) {
      console.log(data.toString());

      res.send(data);
    }
  );
});
*/

app.listen(8000, () => console.log("Express Running on Port 8000"
+"\n"
+"http://localhost:8000/stl")
);
