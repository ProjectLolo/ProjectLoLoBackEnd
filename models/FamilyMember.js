const { model, Schema } = require("mongoose");

const familyMemberSchema = new Schema({
  relation: {
    type: String,
    enum: [
      "Father",
      "Mother",
      "Grand Father",
      "Grand-Mother",
      "Aunt",
      "Uncle",
      "Gaurdian",
    ],
    default: "Gaurdian",
  },
  notification: {
    type: String,
    enum: ["1", "2", "3"],
    default: 1,
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
  kidId: {
    type: String,
    // type: Schema.Types.ObjectId,
    // ref:'Kid',
    // required:true,
  },
});

module.exports = model("FamilyMember", familyMemberSchema);
