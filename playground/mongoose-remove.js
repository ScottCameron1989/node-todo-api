const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id:5b8bfeb5014a04909701e097 }).then((todo)) => {
// });
//
Todo.findByIdAndRemove('5b8bfeb5014a04909701e097').then((todo) => {
  console.log(todo);
});
