import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel as User    } from "../models/user/userModel";

// Middleware to verify JWT token
export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    
  // Get JWT token from request header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    // If token is not provided, return an error
    return res.status(401).json({ error: "Authentication failed: token is missing" });
  }

  try {
    // Verify token with the JWT secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as { user: string };

    // Find the user in the database by the user ID in the decoded token
    const user = await User.findById(decoded.user);

    if (!user) {
      // If user is not found, return an error
      return res.status(404).json({ error: "Authentication failed: user not found" });
    }

    // Add user object to the request for use in later middleware or route handlers
    // req.user = user;

    // Call the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, return an error
    return res.status(401).json({ error: "Authentication failed: invalid token" });
  }
};
