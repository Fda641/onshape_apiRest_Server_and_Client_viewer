const express = require("express");
const app = express();
const cors = require("cors"); // Cross-origin resource sharing
const appOS = require("./lib/app");
// file txt
const fs = require('fs');

///// añadido de etiqueta-html-post
const path = require("path");
const bodyParser = require('body-parser');
////////////////////////////////////////////////////////


let myFile = {
  Path: "../storage-file-stl/", // Path -> folder file .stl,
  Filename: "data",
  extension: ".stl",
};

////////////////////////////////////////////////////////
////// añadido de etiqueta-html-post
// Se creo una carpeta de public 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());
app.use(express.json());

// Settings
app.set('dataFile', path.join(__dirname, 'database'));
//////////////////////////////////////////////////////////////////////

// config dotenv
const myKeys = require('./config/apikey.js');


//Routes
//app.set('routerrr', path.join(__dirname));

//Settings
//app.set('port', process.env.PORT || 3000);
app.use(cors({ origin: "http://localhost:8000" }));

app.get("/", function (req, res) {
  //res.send("Hello World");
  res.sendFile(path.join(__dirname, "./public/index.html"));///// añadido de etiqueta-html-post
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


app.get("/config",  (req, res) => {
  res.send("data");
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



////////////====================////////////====================////////////====================
////////////====================////////////====================////////////====================

app.post('/form', (rep, res) => {

  const stringLink = rep.body.my_link;

  if (stringLink.slice(stringLink.search("cad.")+4, stringLink.search(".com/")) === "onshape") {

      // console.log(rep.body.user);
      let documentId = "";
      let workspaceId = "";
      let workspaceId_z = "";


      //https://cad.onshape.com/documents/51326065233e724c19bc73df/w/559a164dd8c633cf3d65d321/e/338296634bf76c76c0c4582d
      //const stringLink = "https://cad.onshape.com/documents/74a0d2192ca955f84778d08c/w/7925044d8c6cbec0d237b923/e/423124fb0aa5728b0254ef02";
      documentId = stringLink.slice(stringLink.search("ents/") + 5, stringLink.search("/w/"));
      workspaceId = stringLink.slice(stringLink.search("/w/") + 3, stringLink.search("/e/"));
      workspaceId_z = stringLink.slice(stringLink.search("/e/") + 3, stringLink.length);

      /*
          console.log(`documentId:  ${documentId}`);
          console.log("             74a0d2192ca955f84778d08c");
          console.log("");
          console.log(`workspaceId: ${workspaceId}`);
          console.log("             7925044d8c6cbec0d237b923");
          console.log("");
          console.log(`workspaceId: ${workspaceId_z}`);
          console.log("             423124fb0aa5728b0254ef02");
      */

      let data_Base = {
          myLink: `${rep.body.my_link}`,
          documentId: `${documentId}`,
          workspaceId: `${workspaceId}`,
          workspaceId_z: `${workspaceId_z}`,
          tagOne: (`${rep.body.add_tab_one}` != "" ? (`${rep.body.add_tab_one}`) : (`---`)),
          tagTwo: (`${rep.body.add_tab_two}` != "" ? (`${rep.body.add_tab_two}`) : (`---`)),

      };

      let my_data = JSON.stringify(data_Base, null, 2);

      res.end(
          `<html> 
          <head>
          </head>
          <body>
          <h1>Add Link</h1> 
          <h2> ` + data_Base.myLink + `</h2>
          <h1>Add Tab</h1> 
          <h2> ` + data_Base.tagOne + `</h2>
          <h1>Add Tab</h1> 
          <h2> ` + data_Base.tagTwo + `</h2>
          </body>
          </html>`

      );

      //console.log(my_data);
      // writeFileSync
      fs.appendFile(`${app.get('dataFile')}` + "/dataFile.json", `${my_data}` + `,\n`, (err) => {
          if (err) throw err;
          console.log('Data written to file');
      });

  } else {
      res.send("Entreis must have  a title and description");
  }

});

////////////====================////////////====================////////////====================
////////////====================////////////====================////////////====================

app.listen(8000, () => console.log("Express Running on Port 8000"
+"\n"
+"http://localhost:8000/stl")
);
