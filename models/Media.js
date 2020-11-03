const { model, Schema } = require('mongoose')

const mediaSchema = new Schema({
    title: {
        type: Text,
        required:true,
    },
    url: {
        type: Text,
        required:true,
    },
    description: {
        type: Text,
    },
    category:{
        type: String,
        enum:['audio','video','other'],
        default:'video',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
      },
    loveBankId: {
        type: Schema.Types.ObjectId,
        ref: 'LoveBank',
        required:true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
})

module.exports = model('Media', mediaSchema)