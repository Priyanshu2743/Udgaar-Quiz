const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas using Mongoose
mongoose.connect("mongodb+srv://ethiccraft:ya4pW1i0XjpUWCzB@cluster0.ssfmjwo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a user schema
const ParticipantSchema = new mongoose.Schema({
  UserName: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Currcount: Number,
  Score: Number,
});

// Method to compare the password
ParticipantSchema.methods.comparePassword = function (inputPassword, callback) {
  if (inputPassword === this.Password) {
    callback(null, true);
  }else {
    return callback(new Error('Password does not match'), false);
  }
};

// Define a User model
const User = mongoose.model("Quiz-Participants", ParticipantSchema);

app.post("/login", async (req, res) => {
  const { UserName, Password } = req.body;

  try {
    // Find the user by username
    const existingUser = await User.findOne({ UserName });

    // if Participant is not registered
    if (!existingUser) {
      console.log("Not an existing User");
      return res.status(400).send(JSON.stringify({ message: "You have already given the Quiz" }));
    }
    
    else {
    // Compare passwords 
    existingUser.comparePassword(Password, (err, isMatch) => {
      if (err) {
        console.log(err);
      };

      if (isMatch) {
        // Passwords match, allow access to the quiz
        console.log("User authenticated");
        console.log(req.body);

        // Participant first time opened quiz
        if (existingUser.Currcount === 0) {
          return res.status(200).json({ UserName: UserName, Currcount: 0, Score: 0 });
        }
        // Participant already submitted the quiz
        else if (existingUser.Currcount >= 50) {
          return res.status(404).send(JSON.stringify({ message: "You have already given the Quiz" }));
        }
        else {
          // return res.status(420).send(JSON.stringify({UserName: existingUser.UserName, Currcount: existingUser.Currcount, Score: existingUser.Score,}));
          return res.status(404).send(JSON.stringify({ message: "You have already given the Quiz" }));
        }
      } 
      else {
        // Password does not match
        res.status(401).send(JSON.stringify({ message: "Incorrect username or password." }));
      }
    });    
  }} 
  catch (error) {
    return res.send(JSON.stringify({ message: "Server error. Please try again later." }));
  }
});

app.post('/update', (req, res) => {
  const { UserName, Currcount, Score } = req.body;
  User.findOne({ UserName: UserName }).then(existingUser => {
      if (existingUser) {
          console.log(existingUser.Score);
          existingUser.Currcount = Currcount;
          existingUser.Score = Score;
          existingUser.save();
          return res.status(200).json({ UserName: UserName, Currcount: Currcount, Score: Score });
      }
  }).catch(error => {
      console.log(error);
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Quiz.html");
});

app.get("/prizes", function (req, res) {
  res.sendFile(__dirname + "/prizes.html");
});

// Start the server
app.listen(PORT, '0.0.0.0' ,() => {
  console.log(`Server started on port ${PORT}`);
});
