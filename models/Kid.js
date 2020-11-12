const { model, Schema } = require("mongoose");

const kidSchema = new Schema(
  {
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
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:true,
    },
    familyMembers: [
      {
        type: Schema.Types.ObjectId,
        ref: "FamilyMember",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Kid", kidSchema);
