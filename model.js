const mongoose = require('mongoose')


const todoModel = new mongoose.Schema(
    {
        name: String,
        message: String,
        deadLine: String,
    },
    {
        timestamps: true,
        collection: "todoList",
    }
);

todoModel.statics.addList=async function(name,message,deadLine){
    const todo = await this.create({name,message,deadLine});
    return todo;
}

module.exports = mongoose.model("todoList",todoModel)