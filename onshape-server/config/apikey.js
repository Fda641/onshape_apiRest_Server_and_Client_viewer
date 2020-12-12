//require("dotenv");
require('dotenv').config({path:'../.env'});//https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables

// This is an example of a API key file.
// Copy this to apikey.js in the same directory and replace the placeholders with appropriate values.
var prod = {
  baseUrl: "https://cad.onshape.com",
  documentId: process.env.ONSHAPE_DOCUMENT_ID,
  accessKey: process.env.ONSHAPE_ACCESS_KEY,

  //browser link
  secretKey: process.env.ONSHAPE_SECRET_KEY,
  workspace_W_Id: process.env.ONSHAPE_WORKSPACE_W_ID,
  workspace_E_1_Id: process.env.ONSHAPE_WORKSPACE_E_1_ID

}; 

module.exports = prod;


