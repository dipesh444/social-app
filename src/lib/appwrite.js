import { Client, Account } from "appwrite";


const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67628c960028b502a515');
export const account = new Account(client);