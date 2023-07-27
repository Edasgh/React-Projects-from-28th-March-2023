import { Client, Account , Databases ,Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.EP)
  .setProject(process.env.API_KEY);

export const account = new Account(client);
export const databases = new Databases(client ,process.env.PRODUCTDB_ID)
export const storage = new Storage(client)
// export const databases = new Databases(client , DATABASE_ID)
