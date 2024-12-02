const feedback_form = require("../Model/FeedBackForm");

const FeedBackForm = async (req, res) => {
  const { name, email, subject, feedback } = req.body;
  const data = new feedback_form({ Name: name, email, subject, feedback });
  if (name && email && subject && feedback) {
    data.save();
    res.status(200).send({ message: "The mail sent successfully!!!" });
  } else {
    res.status(403).send({ message: "Please enter all the details" });
  }
};

module.exports = FeedBackForm;
