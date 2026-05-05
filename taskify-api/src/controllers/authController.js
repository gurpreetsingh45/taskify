import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "User succesfully registered",
      data: result,
    });
  } catch (error) {
    console.error(`Error : ${error}`);
    res.status(500).json({
      success: false,
      message: "Unable to register User",
      data: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const tokens = await loginUser(req.body);
    res.cookie("refreshCookie", tokens.refreshToken, {
        httpOnly : true,
        secure : true,
        sameSite : 'strict',
        maxAge : 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "User succesfully logged in",
      data: {accessToken: tokens.accessToken},
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "User login failed",
      data: error.message,
    });
  }
};
