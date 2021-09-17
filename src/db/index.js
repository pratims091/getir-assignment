import { MongoClient } from 'mongodb'; // Not using mongoose/models for this simple example

const client = new MongoClient(process.env.DB_URL);

export default client;
