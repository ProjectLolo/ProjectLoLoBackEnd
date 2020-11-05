const { model, Schema } = require("mongoose");

const kidSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
  },
  birthdate: {
    type: String,
  },
  profileImageUrl: {
    type: String,
  },
  code: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref: 'User',
    // required:true,
  },
  familyMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "FamilyMember",
    },
  ],
});

module.exports = model("Kid", kidSchema);
