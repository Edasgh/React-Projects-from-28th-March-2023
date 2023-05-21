import { Account, Client, Databases} from "appwrite";

const client = new Client();


client
  .setEndpoint("http://localhost:8080/v1") // API_ENDPOINT
  .setProject("64687f99d368823080b6");   // PROJECT_ID

export const account = new Account(client);
export const databases = new Databases(client,"64688e0c85f3f147569a");
// DATABASE_ID = 64688e0c85f3f147569a
//COLLECTION_ID = 64688e13df289f044dd5
