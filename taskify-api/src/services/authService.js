import bcrypt from 'bcryptjs';
import User from "../models/UserModel.js";

const registerUser = async ({ name, email, password }) => {
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new Error("User already exit");
  }
  // hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    password : hashedPassword,
  };
  const userCreated = await User.create(newUser);
  if(!userCreated){
    throw new Error("Unable to create new User");
  }
  const user = userCreated.toObject();
  delete user.password;
  return user;
};

export default registerUser;