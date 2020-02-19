import mongoose from 'mongoose';
// Setup schema

let postSchema = mongoose.Schema({
    image: {
        data: Buffer, 
        contentType: String 
    },
    message: {
        type: String,
        required: true,
    },
    tag: String,
    create_date: {
        type: Date,
        default: Date.now
    },
})

let Post = module.exports = mongoose.model('post', postSchema);
module.exports.get = function(callback, limit){
    Post.find(callback).limit(limit);
}
