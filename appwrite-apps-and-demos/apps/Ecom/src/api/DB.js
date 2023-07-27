const sdk = require('node-appwrite');
require('dotenv').config();

// Init SDK
const client = new sdk.Client();
const ID = sdk.ID

const databases = new sdk.Databases(client);

client
    .setEndpoint(process.env.EP) // Your API Endpoint
    .setProject(process.env.PID) // Your project ID
    .setKey(process.env.API_KEY) // Your secret API key
;


export const createDB=async(dbName)=>{
   
    const promise = databases.create(ID.unique(), dbName);
    
    promise.then(function (response) {
       console.log(response);
    }, function (error) {
       console.log(error);
    });
}

export const updateDB=async(dbID,dbName)=>{
    const promise = databases.update(dbID, dbName);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}


export const deleteDB=async(dbID)=>{
    const promise = databases.delete(dbID);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}

export const listDBs=async()=>{
    const promise = databases.list();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}

export const getDB=async(dbID)=>{
    const promise = databases.get(dbID);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}
