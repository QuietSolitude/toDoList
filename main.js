const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(express.json());

app.get('/?key=uid', (req, res) => {
    const toDoID = req.query["key"];
    const chickData = toDoID;
    const toDoItem = chickData;
    res.status(200).json(toDoItem);
});

app.post('/', (req, res) => {
    const toDoItem = req.body;
    const saveData = toDoItem;
    const toDoID = 15;
    res.status(201).json({toDoID : toDoID});
})

app.delete('/?key=uid', (req, res) => {
    const deleteID = req.query["key"];
    const dataID = deleteID;
    
    res.status(200).send("delete todo_list success");
})

app.patch('/?key=uid', (req, res) => {
    const updateId = req.query["key"];
    const updateContent = req.body;
    res.status(200).send("upadat content success");
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});