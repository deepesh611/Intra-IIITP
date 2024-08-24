const express = require('express');
const routers = express.Router();
const { SignUp } = require("../models"); // Assuming SignUp is the model where user data is stored
const session =require('express-session')

// Sign-In Route
routers.post("/signin", async (req, res) => {
  const { Email, Password } = req.body;

  try {
    // Find the user by email
    const user = await SignUp.findOne({ where: { Email } });

    if (!user) {
      return res.status(401).json({ status: false, message: "Invalid email or password" });
    }

    // Check if the password matches (assuming plain text comparison, but you should use hashing in production)
    if (user.Password !== Password) {
      return res.status(401).json({ status: false, message: "Invalid email or password" });
    }

    // If the login is successful
    res.status(200).json({ status: true, message: "Login successful!", user });

  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});


function isAuthenticated(req) {
    // This is a placeholder. Replace with actual authentication logic.
    // E.g., check if `req.session.user` exists or verify a JWT.
    return req.session && req.session.user;
  }
  

routers.get("/signin", async (req, res) => {
  try {
    if (isAuthenticated(req)) {
      // If the user is authenticated, return their information
      const user = await SignUp.findOne({ where: { id: req.session.user.id } });
      res.status(200).json({ loggedIn: true, user });
    } else {
      // If the user is not authenticated
      res.status(200).json({ loggedIn: false });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ loggedIn: false, message: "Internal server error" });
  }

 });

 module.exports=routers;