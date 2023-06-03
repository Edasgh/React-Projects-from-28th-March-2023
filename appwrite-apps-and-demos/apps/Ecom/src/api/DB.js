const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();
const ID = sdk.ID

const databases = new sdk.Databases(client);

client
    .setEndpoint('http://localhost:8080/v1') // Your API Endpoint
    .setProject('64757398313495d3c29b') // Your project ID
    .setKey('dafe61ede30f4e8a409fbbe7d13934cf2214cbadd5b123f38f06a17d30d12df3ac940957c00e0f4628476d5417ace81bbec94d27c9e6a23f4fc8d30aa02258654eadfb04921c6f5587b44dba3af00a25a6ed4d447b0e1f292e582f3b661f6df0be50eb45aa047b0b30c409dfca7f1d0e7ed768d1333d483e70e348428ad9cbcf') // Your secret API key
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