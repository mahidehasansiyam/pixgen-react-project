import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.MDB_URL);
const db = client.db('pixgen');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
   
    client,
  }),
});
