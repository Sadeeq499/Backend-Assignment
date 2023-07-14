import User from "../Models/UserModel.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      // return res.status(400).json({ message: "User already exists" });
      throw new Error("User Already Registered ");
    }
    // create a new account for user
    user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully",
      email: user.email,
      token: await user.generateToken(),
    });
  } catch (error) {
    next(error);
  }
};

// login controller
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }
    return res.status(200).json({
      message: "User logged in successfully",
      email: user.email,
      token: await user.generateToken(),
    });
  } catch (error) {
    next(error);
  }
};
