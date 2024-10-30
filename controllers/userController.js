const User = require('../models/userModel')

exports.createUser = async (req,res) =>{
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User created', user });
      } catch (error) {
        res.status(400).json({ message: 'Error in creating user', error });
      }
    };


    exports.getAllUsers = async (req, res) => {
        try {
          const products = await Product.find();
          res.status(200).json(products);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching products' });
        }
      };


      

      