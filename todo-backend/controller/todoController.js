const db = require('../models/index')

const Todo = db.todos

//create todos
const addTodo = async(req, res)=>{
    

    // Create a new Date object
const currentDate = new Date();

// Get individual components of date and time
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

// Construct the formatted date and time string
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// console.log(title, describtion)
// Log the formatted date and time to the console
console.log("Current Date and Time:", formattedDateTime);

const {title, describtion} = req.body
    const todo = await Todo.create({
        title, describtion, time:formattedDateTime
    })

    if(todo){
        res.json({message:"the todo is successfully added"})
        console.log(todo)
    }
    else{
        res.json({message:"The todo is not added try again"})
    }    
}
const readTodos = async (req,res) =>{

    const todos = await Todo.findAll()

    res.send(todos)
}
const updateTodos = async(req,res) =>{
    let id = req.params.id

    const updatedTodo = await Todo.update(req.body, {where: {id:id}})

    res.status(200).send(updatedTodo)

}

const deleteTodos = async (req, res)=>{
    let id = req.params.id

    await Todo.destroy( {where:{id:id}})

    res.status(200).send("product is deleted")
    
}
module.exports = {addTodo, readTodos, updateTodos, deleteTodos}