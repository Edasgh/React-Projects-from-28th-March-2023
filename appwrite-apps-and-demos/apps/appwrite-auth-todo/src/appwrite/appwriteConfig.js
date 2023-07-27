import { Account, Client, Databases } from "appwrite";

const client = new Client();
require('dotenv').config();

client
  .setEndpoint(process.env.EP)
  .setProject(process.env.PROJECT_ID);

export const account = new Account(client);

//database

// export const databases = new Databases(client, DATABASE_ID);
export const databases = new Databases(client,process.env.DB_ID)

