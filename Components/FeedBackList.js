const feedback_list = require("../Model/FeedBackForm");

const FeedBackForm = async (req, res) => {
  const data = await feedback_list.find();
  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.status(403).send({ message: "Please enter all the details" });
  }
};

module.exports = FeedBackForm;
