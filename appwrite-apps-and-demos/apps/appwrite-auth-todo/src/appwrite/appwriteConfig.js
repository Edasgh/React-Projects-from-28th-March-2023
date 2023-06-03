import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost:8080/v1")
  .setProject("64663ebbf282522594d9");

export const account = new Account(client);

//database

// export const databases = new Databases(client, DATABASE_ID);
export const databases = new Databases(client,"64663f99f140b3707491")

