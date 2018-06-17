// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({_id: new ObjectID("5b25bc66e4e1af07853774f0")}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=> {
  //   console.log('Unable to fecth todos', err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log('Todos');
    console.log(`todos count:${count}`);
  }, (err)=> {
    console.log('Unable to fecth todos', err);
  });
  db.collection('Users').find({name:'Scott'}).toArray().then((users)=>{
    console.log('Users');
    console.log(JSON.stringify(users,undefined,2));
  }, (err)=> {
    console.log('Unable to fecth todos', err);
  });
  // client.close();
});
