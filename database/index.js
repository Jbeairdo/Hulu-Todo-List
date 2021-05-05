const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projects', { useNewUrlParser: true,  useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('database is running')
});

const taskSchema = mongoose.Schema({
  task_id: {
    type: Number,
    index: true,
    required:true
  },
  name: String,
  title: String,
  description: String,
  due_date: String,
  month: String,
  completed: Boolean
});

const Tasks = mongoose.model('Tasks', taskSchema);

// Tasks.create({
//   name: "Create list",
//   description: "Create a list of things I need to do",
//   due_date: "05-15-2021",
//   month: "May",
//   completed: false,
// })

module.exports = db;