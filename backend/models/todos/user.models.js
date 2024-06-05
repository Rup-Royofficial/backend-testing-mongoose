import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        // u can in simple terms write username: String, but for detailed information modelling, the below methods are appreciated as it is way more verbose
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: Mixed,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
    },{timestamps:true}) // timestamps give the data of createdAt and updatedAt values of a specific fields

export const User = mongoose.model("User", userSchema) // aikhane mongoose.model("aikhane je name use hobe onnano jaigai ai name diyei reference ta call hobe")
// the variable name User and the mongoose.model("User") don't necessarily have to be same, but it is a good practice to have same names, despite the inner name being used for reference in other models
