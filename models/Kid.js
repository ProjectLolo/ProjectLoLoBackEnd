const { model, Schema } = require('mongoose')

const kidSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    nickName: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
    profileImageUrl:{
        type: Text,
    },
    code:{
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
      },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
})

module.exports = model('Kid', kidSchema)