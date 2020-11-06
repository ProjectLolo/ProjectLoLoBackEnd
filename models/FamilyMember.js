const { model, Schema } = require("mongoose");

const familyMemberSchema = new Schema(
  {
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
    userId: {
      type: String,
      // type: Schema.Types.ObjectId,
      // ref: "User",
    },
    kid: {
      type: Schema.Types.ObjectId,
      ref: "Kid",
    },
  },
  { timestamps: true }
);

module.exports = model("FamilyMember", familyMemberSchema);
