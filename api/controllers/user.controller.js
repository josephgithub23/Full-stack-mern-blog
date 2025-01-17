import { errorHandler } from "../utils/errorHandler.js";
import User from "../models/user.model.js";
import bycryptjs from "bcryptjs";

export const text = (req, res) => {
  res.json({ message: "Api is working" });
};

/**
 * Before a user profile can be updated we need to authenticate/verify the user params or token.
 */

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 8) {
      return next(
        errorHandler(400, "Password must contain at least 8 characters")
      );
    }
    req.body.password = bycryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username > 20) {
      return next(errorHandler(400, "Username must be 7 to 20 characters "));
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username can not contain white spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase"));
    }

    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain lowercase and numbers")
      );
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          /**
           * The set method allow us to only update the single params listed from the body.
           */
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );

      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};
