import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    name: {
        type: String,
        required: "Name is empty." ,
        unique : true
    },
    userCreate: {
        type: Schema.ObjectId
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    detail: {
        type: String
    },
    image_story: [],
    uploads: {
        type: Date
    }
})


mongoose.model('Blog')