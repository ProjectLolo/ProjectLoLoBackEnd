const { model, Schema } = require('mongoose')

const loveBankSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
      },
    kidId: {
        type: Schema.Types.ObjectId,
        ref:'Kid',
        required:true,
    },
    mediaId: {
        type: Schema.Types.ObjectId,
        ref:'Media',
        required:true,
    },
})

module.exports = model('LoveBank', loveBankSchema)