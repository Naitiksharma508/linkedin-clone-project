const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// SIGNUP (REGISTER)  
exports.register = async (req, res) => {
  
  
    try {
    
    
    const { email, password, name } = req.body;

    // Check if the user already exists
    
    
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      
      return res.status(400).json({ message: 'User already exists with that email' });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    
    // Creating the new user
    const newUser = new User({
      email: email,
      password: hashedPassword,
      name: name,
    });

    // Saving the user to the database
    await newUser.save();


    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
};

// LOGIN LOGIC
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if a user with that email exists
    const user = await User.findOne({ email: email });
    if (!user) {
    
      return res.status(404).json({ message: 'User not found.' });
    }

    // Comparing the password user typed with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
    
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    //  If password is correct then we will create a JSON Web Token (JWT)
    // This token is the user's "login pass"
    const payload = {
      user: {
        id: user.id, 
        name: user.name,
      }
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET, 
      { expiresIn: '3h' } // Token will expire in 3 hours
    );

    // Sending the token (and user info) back to the frontend
    res.status(200).json({
      message: 'Logged in successfully',
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
};