const express = require("express");
const dbconnect = require("./config/db");
const cors = require("cors");
dbconnect();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/requestForm", require("./Components/CTAForm"));
app.post("/feedbackForm", require("./Components/FeedBackForm"));
app.get("/feedbackList", require("./Components/FeedBackList"));

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
