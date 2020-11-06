const { model, Schema } = require("mongoose");

const loveBankSchema = new Schema(
  {
    kidId: {
      type: Schema.Types.ObjectId,
      ref: "Kid",
      required: true,
    },
    mediaId: {
      type: Schema.Types.ObjectId,
      ref: "Media",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("LoveBank", loveBankSchema);
