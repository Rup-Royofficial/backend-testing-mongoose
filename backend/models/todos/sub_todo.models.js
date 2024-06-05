import mongoose from 'mongoose'

const subtodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: { // form of referencing a model created somewhere else, within hte models 
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },{timestamps: true})

export const SubTodo = mongoose.model('SubTodo', subtodoSchema)// the Name by which the model is going to be referenced & the schema it belongs to, are parameters 