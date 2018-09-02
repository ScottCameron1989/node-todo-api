const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b8b37c80909483764aab35b1';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valide');
// }
//
// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.log('todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=> {
//   console.log('todo',todo);
// });
//
// Todo.findById(id).then((todo)=> {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('todo By ID',todo);
// }).catch((e)=> console.log(e));

User.findById('5b284a4097a9cd3de01095fd').then((user)=> {
if (!user){
  return console.log('Unable to find user');
}
console.log(JSON.stringify(user,undefined,2));
}, (e) => {
console.log(e)
});
