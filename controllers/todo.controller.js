const { findByIdAndDelete } = require("../model/todo.model");
const TodoModel = require("../model/todo.model")

exports.createTodo = async (req, res, next) => {
    try {
        const createModel = await TodoModel.create(req.body);
        res.status(201).json(createModel);
    } catch (error) {
        next(error);
    }
}

exports.getTodos = async (req, res, next) => {
    try {
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos); 
    } catch (error) {
        next(error);        
    }
}

exports.getTodoById = async (req, res, next) => {
    try {
        const todoById = await TodoModel.findById(req.params.todoId);
        if(todoById){
            res.status(200).json(todoById); 
        } else {
            res.status(404).send();
        }
    } catch (error) {
        next(error);        
    }
}

exports.updateById = async (req, res, next) => {
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.todoId, req.body, {
            new: true,
            useFindAndModify: false
        });
        if(updatedTodo){
            res.status(200).json(updatedTodo);
        } else {
            res.status(404).send(); 
        }
    } catch (error) {
        next(error);
    }
}

exports.deleteById = async (req, res, next) => {
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);
        if(deletedTodo){
            res.status(200).json(deletedTodo);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
}