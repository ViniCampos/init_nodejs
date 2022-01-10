const express = require("express");
const app = express(); //To call the express package
const todoRoutes = require("./routes/todo.routes");

app.use("/todos", todoRoutes); // means "/" + "todos" will send to createTodo on the post method

app.get("/", (req, res) => {
    res.send("Hello World!"); //res.json to return a json script
}); //root url + arrow function

app.listen(3000, () => {
    console.log("Server is now running!");
})

module.exports = app;