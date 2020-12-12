This app is a simple example of how to show 3d models created in the CAD design platform https://www.onshape.com/


onshape-client
It is developed thanks to the project of: 
    
    https://github.com/SirMoustache/react-three-viewer

    https://youtu.be/eFIMKjFxMes
    
onshape-server
It is developed thanks to the project of: 
    
    https://github.com/billschnoebelen/onshape_getting-started_server

# Prerequisites:
    Linux development environment
    
    $ node -v
        v12.16.1

    $ npm -v
        6.13.4

    $ npm view react version
        17.0.1
        
# Environment variables
You will need the following environment variables defined with the access key and secret key from:

https://dev-portal.onshape.com/

    ONSHAPE_ACCESS_KEY  ONSHAPE_SECRET_KEY

# Create a ".env" document in the project home folder and configure it with environment variables and the link of the Onshape doc you want to display
    $ touch .env

        ONSHAPE_ACCESS_KEY=
        ONSHAPE_SECRET_KEY=


        ONSHAPE_DOCUMENT_ID= < documentId >
        ONSHAPE_WORKSPACE_W_ID= < workspaceId >
        ONSHAPE_WORKSPACE_E_1_ID= < workspaceId >
Example
    
    https://cad.onshape.com/documents/  < documentId >    /w/     < workspaceId >    /e/     < workspaceId >


# How to run:

    $ cd onshape-server
    $ npm i
    $ npm start

    check in browser

http://localhost:8000/stl

Open a new terminal

    $ cd ..
    $ cd onshape-client
    $ npm i
    $ npm start

    check in browser

http://localhost:3000/



AWS Ubuntu 20.04.1 LTS

$ sudo apt update

$ git clone https://github.com/Fda641/onshape_apiRest_Server_and_Client_viewer.git

$ sudo apt-get install nodejs

$ node -v

$ sudo apt install npm

$ npm -v

