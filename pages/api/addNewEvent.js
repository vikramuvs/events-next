// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

   // console.log(data.enterdImage);

    const client = await MongoClient.connect('mongodb+srv://vikramuvs:eureka123@cluster0.hvhou.mongodb.net/events?retryWrites=true&w=majority')
    const db = client.db();

    const eventsCollection = db.collection('events');

    const result = await eventsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Event Inserted!'});
  }
 // res.status(200).json({ name: 'John Doe' })
}
