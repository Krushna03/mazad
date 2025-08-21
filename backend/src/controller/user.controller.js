import { User } from "../model/user.model.js";


const generateAccessRefreshToken = async (userId) => {
  try {
    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "UserId not found."
      })
    }
  
    const user = await User.findById(userId);
  
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
  
    await user.save({ validateBeforeSave: false });
  
    return { accessToken, refreshToken };

  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Something went wrong while generating tokens.");
  }
}

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({
      success: false,
      message: "All fields are required."
    })
  }

  const userexists = await User.findOne({ email });

  if (userexists) {
    return res.status(200).json({
      success: false,
      message: "User with this email already exists"
    })
  }

  const createNewUser = await User.create({
    name,
    email,
    password
  })

  if (!createNewUser) {
    return res.status(500).json({
      success: false,
      message: "User not created."
    })
  }

  const { accessToken } = await generateAccessRefreshToken(createNewUser._id);

  const loggedUser = await User.findById(createNewUser._id).select('-password -refreshToken')

  const options = {
    httpOnly: true, 
    secure: true
  }

  return res
        .status(200)
        .cookie('accessToken', accessToken, options)
        .json({
            success: true,
            message: "User created successfully.",
            data: loggedUser
          })
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      success: false,
      message: "All fields are required."
    })
  }

  const userexists = await User.findOne({ email });

  if (!userexists) {
    return res.status(200).json({
      success: false,
      message: "User with this email does not exists"
    })
  }

  const passwordCorrect = await userexists.isPasswordCorrect(password);

  if (!passwordCorrect) {
    return res.status(200).json({
      success: false,
      message: "Please enter correct password."
    })
  }

  const { accessToken } = await generateAccessRefreshToken(userexists._id);

  const loggedUser = await User.findById(userexists._id).select('-password -refreshToken')

  const options = {
    httpOnly: true, 
    secure: true
  }

  return res
        .status(200)
        .cookie('accessToken', accessToken, options)
        .json({
            success: true,
            message: "User login successfully.",
            data: loggedUser
          })
}