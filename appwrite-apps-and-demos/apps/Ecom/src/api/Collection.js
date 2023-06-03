const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();
const ID = sdk.ID
const permission = sdk.Permission
const Role = sdk.Role
const databases = new sdk.Databases(client);

client
    .setEndpoint('http://localhost:8080/v1') // Your API Endpoint
    .setProject('64757398313495d3c29b') // Your project ID
    .setKey('dafe61ede30f4e8a409fbbe7d13934cf2214cbadd5b123f38f06a17d30d12df3ac940957c00e0f4628476d5417ace81bbec94d27c9e6a23f4fc8d30aa02258654eadfb04921c6f5587b44dba3af00a25a6ed4d447b0e1f292e582f3b661f6df0be50eb45aa047b0b30c409dfca7f1d0e7ed768d1333d483e70e348428ad9cbcf') // Your secret API key
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