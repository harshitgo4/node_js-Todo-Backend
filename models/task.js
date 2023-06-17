import mongoose from "mongoose";

const schema = mongoose.Schema({
    title:
    {
        type: String,
        reuire: true
    },
    description: {
        type: String,
        unique: true,
        require: true
    },
    isCompleted:
    {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    }
});

export const Task = mongoose.model("tasks", schema);
