import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model("User", userSchema);
