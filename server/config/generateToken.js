import jwt from "jsonwebtoken";
import "dotenv/config.js";
const generateToken = async (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT, { expiresIn: "1h" });

    //cookies send
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 1000,
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};
export default generateToken;
