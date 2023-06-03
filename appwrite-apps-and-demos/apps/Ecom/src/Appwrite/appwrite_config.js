import { Client, Account , Databases ,Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost:8080/v1")
  .setProject("64757398313495d3c29b");

export const account = new Account(client);
export const databases = new Databases(client , "647592808a5c92596610")
export const storage = new Storage(client)
// export const databases = new Databases(client , DATABASE_ID)
