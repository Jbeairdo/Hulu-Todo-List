const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projects', { useNewUrlParser: true,  useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('database is running')
});

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
});

const qcSchema = mongoose.Schema({
  name: String,
  facebook: Number,
  twitter: Number
})

const Tasks = mongoose.model('Tasks', taskSchema);
const QC = mongoose.model('QC', qcSchema);

module.exports = {
  Tasks,
  QC
};