const { model, Schema } = require("mongoose");

const loveBankSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    preview: String,
    description: {
      type: String,
    },

    category: {
      type: String,
      enum: ["fun", "memory", "activate", "teach", "sing", "read", "share"],
      default: "",
    },
    type: {
      type: String,
      enum: ["audio", "video", "other", "picture"],
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
        firstName: String,
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
