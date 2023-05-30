import { Client, Account , Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost:8080/v1")
  .setProject("64757398313495d3c29b");

export const account = new Account(client);
// export const databases = new Databases(client , DATABASE_ID)
