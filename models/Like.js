const { model, Schema } = require('mongoose')

const likeSchema = new Schema({
    liked:{
        type:Boolean,
        default:false,
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
        ref:'User',
        required:true,
    },
    mediaId: {
        type: Schema.Types.ObjectId,
        ref:'Media',
        required:true,
    },
})

module.exports = model('Like', likeSchema)