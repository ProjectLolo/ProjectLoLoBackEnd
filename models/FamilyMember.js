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
  createdAt: String,
  modifiedAt: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  kidId: {
    type: Schema.Types.ObjectId,
    ref: "Kid",
  },
});

module.exports = model("FamilyMember", familyMemberSchema);
