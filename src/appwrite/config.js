import { Account, Client, Databases } from 'appwrite';
import { config } from '../config/config';

const client = new Client();
client
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectID);

const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };
