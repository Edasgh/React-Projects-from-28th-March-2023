const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();
const ID = sdk.ID
const permission = sdk.Permission
const Role = sdk.Role
const databases = new sdk.Databases(client);

client
    .setEndpoint(process.env.EP) // Your API Endpoint
    .setProject(process.env.PID) // Your project ID
    .setKey(process.env.API_KEY) // Your secret API key
;

export const createCollection=async(userID,dbID,collectionName)=>{

    
    const promise = databases.createCollection(dbID, ID.unique(), collectionName,[
       permission.create(Role.user(userID)),
       permission.update(Role.user(userID)),
       permission.delete(Role.user(userID)),
       permission.read(Role.any())
    ]);
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

export const listCollections=async(dbID)=>{
    const promise = databases.listCollections(dbID);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}

export const getACollection=async(dbID,collectionID)=>{
    const promise = databases.getCollection(dbID, collectionID);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}

export const updateACollection=async(dbID,collectionID,collectionName)=>{
    const promise = databases.updateCollection(dbID, collectionID, collectionName);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}

export const deleteACollection=async(dbID,collectionID)=>{
    
const promise = databases.deleteCollection(dbID, collectionID);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}
