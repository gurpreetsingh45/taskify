import bcrypt from 'bcryptjs';
import User from "../models/UserModel.js";
import generateToken from '../utils/generateToken.js';

export const registerUser = async ({ name, email, password }) => {
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

export const loginUser = async({email, password}) => {
    const user = await User.findOne({email}).select("+password");
    if(!user){
        throw new Error("Invalid Credentials");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        throw new Error("Invalid Password");
    }
    const {accessToken, refreshToken} = generateToken(user._id);
    const addToken = await User.updateOne({_id : user._id}, {refreshToken});
    return {accessToken, refreshToken};
}