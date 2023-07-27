import { Account, Client, Databases , Storage} from "appwrite";
import "dotenv/config";


const client = new Client();


client
  .setEndpoint(process.env.EP) // API_ENDPOINT
  .setProject(process.env.PROJECT_ID);   // PROJECT_ID

export const account = new Account(client);
export const databases = new Databases(client,DB_ID);
export const storage = new Storage(client)

