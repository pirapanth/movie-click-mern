const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require('bcrypt');
const MovieModel = require('./models/User')
const MessageModel = require('./models/Message')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/movie");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  MovieModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.json("No record exists for this email");
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.json("Error comparing passwords");
        }
        if (result) {
          return res.json("Success");
        } else {
          return res.json("Incorrect password");
        }
      });
    })
    .catch(error => {
      console.error("Error finding user:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});


app.post('/register', async (req, res) => {
  const { name,email, password } = req.body;
  
  try {
    const existingUser = await MovieModel.findOne({ email: email });
    if (existingUser) {
      return res.json("An account with this email already exists");
    }
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await MovieModel.create({ name:name ,email: email, password: hashedPassword });
    password = hashedPassword;

    return res.json(newUser);
  } catch (error) {
    return res.json(error);
  }
});


app.post('/contact',(req,res) =>{
  MessageModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/user/:email', (req, res) => {
  const userEmail = req.params.email;
  MovieModel.findOne({ email: userEmail })
    .then(user => {
      if (user) {
        res.json({ name: user.name });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});
app.listen(3001,() => {
  console.log("server is running")
})

