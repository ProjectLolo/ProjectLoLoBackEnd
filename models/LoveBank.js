const { model, Schema } = require("mongoose");

const loveBankSchema = new Schema(
  {
    title: {
      type: Text,
      required: true,
    },
    url: {
      type: Text,
      required: true,
    },
    description: {
      type: Text,
    },
    category: {
      type: String,
      enum: ["audio", "video", "other"],
      default: "video",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    kidId: {
      type: Schema.Types.ObjectId,
      ref: "Kid",
      required: true,
    },
    comments: [
      {
        userId: { type: Schema.Types.ObjectId },
        comment: String,
        createdAt: String,
      },
    ],
    likes: [
      {
        userId: { type: Schema.Types.ObjectId },
        createdAt: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("LoveBank", loveBankSchema);
