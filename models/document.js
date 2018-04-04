const mongoose   = require('mongoose');
// Schema setup
const  documentSchema = new mongoose.Schema({ 
    title: String, 
    cover: String, 
    file: String, 
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model('Document', documentSchema);