import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notesSchema = new Schema({});

notesSchema.pre("save", (next) => {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("Notes", notesSchema);
