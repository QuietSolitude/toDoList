const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(express.json());

app.get('/:uid', (req, res) => {
  var toDoLTem = req.params.uid;
  res.status(200).json(toDoLTem);
});

app.post('/', (req, res) => {
    var toDoLtem = req.body;
    res.status(201).json("new todo_list create, ID {id:id}");
})

app.delete('/:uid', (req,res) => {
    var deleteId = req.params.uid;
    res.status(200).json("delete todo_list success");
})

app.patch('/:uid', (req,res) => {
    var updateId = req.params.uid;
    var updateContent = req.body;
    res.status(200).json("upadat content success");
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});