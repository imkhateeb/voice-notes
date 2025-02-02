const { User } = require("../../models");

const deleteUser = async (id) => {
  return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
module.exports = deleteUser;
