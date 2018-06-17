// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  //   db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b25cd1fe4e1af0785377a90')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{returnOriginal:false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b2686ef278c2757d8f41534')
  }, {
    $set: {
      name: "Andrew"
    },
    $inc: {
      age: 1
    }
  }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });
});
// client.close();
