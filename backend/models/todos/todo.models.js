import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }, 
        subTodos: [ // Either u can create the objects within the array or create a separate schema for the object and refer it here
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            },
        ],
    },{timestamps: true})

export const todo = mongoose.model('todo', todoSchema)