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
        "Guardian",
      ],
      default: "Guardian",
    },
    notification: {
      type: String,
      enum: ["0", "1", "2", "3"],

      default: 1,
    },
    userId: {
      type: String,
    },
    kid: {
      type: Schema.Types.ObjectId,
      ref: "Kid",
    },
  },
  { timestamps: true }
);

module.exports = model("FamilyMember", familyMemberSchema);
