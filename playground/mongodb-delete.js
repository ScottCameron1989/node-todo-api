// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text:"eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text:"eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: "Andrew"}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b25bb63f58a325e4c11e2bc")}).then((result) => {
    console.log(result);
  });
  // client.close();
});
