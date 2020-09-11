import mongoose from 'mongoose'

const alertSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    valid: String,
    friends: [String],
    favorites: [String]
});
export default mongoose.model('user', alertSchema)