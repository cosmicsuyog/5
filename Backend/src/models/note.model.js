const mongoose =require("mongoose")

const noteSchema = new mongoose.Schema({
    title :String,
    description:String
})


const noteModel = mongoose.model("NoteData",noteSchema)


module.exports = noteModel