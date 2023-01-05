const { google } = require('googleapis')
const path = require('path')
const fs = require('fs');
const { version } = require('os');

const CLIENT_ID = '563961856346-4seqsu487r9022b51qtksid8uuum5lgm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOEKN = '1//040qexlwzTgJVCgYIARAAGAQSNwF-L9Ir7mFsiDCrZeW8Te7S8pDDegLOsiBRQf1TCQLtRqhZVMSqRLMcTRIN-KS8Y6PWj6g9wl0'

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

oauth2Client.setCredentials({refresh_token: REFRESH_TOEKN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
}
)

const filePath = path.join(__dirname,'denji.jpg')

async function uploadFile(){

    try {
        
        const response = await drive.files.create({
            requestBody:{
                name: 'MyUpload.jpg',
                mimeType: 'image/jpg'
            },
            media:{
                mimeType: 'image/jpg',
                body: fs.createReadStream(filePath)
            }
        }) 

        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

//uploadFile();

async function deleteFile(){
    try {
    const response  = await drive.files.delete({
        fileId: '1fEQyGZmXNUtsO_ePUFTS3iSNaYyDMvDh'
    })

    console.log(response.data, response.status);
    } catch (error) {
        console.log(error.message);
    }
}


//deleteFile()

