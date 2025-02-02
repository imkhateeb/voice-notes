const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  visibility: {
    type: String,
    enum: ["public", "private"],
    default: "private",
  },
  images: [String],
  audios: [String],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

notesSchema.pre("save", (next) => {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Notes", notesSchema);
