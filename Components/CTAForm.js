const request_form = require("../Model/CTAForm");

const CTAForm = async (req, res) => {
    const { name, email, phone, clgName, message } = req.body;
    const data = new request_form({ Name: name, email, phone, clgName, message });
    if (name && email && phone && clgName && message ) {
      data.save();
      res.status(200).send({ message: "The mail sent successfully!!!" });
    } else {
      res.status(403).send({ message: "Please enter all the details" });
    }
}

module.exports = CTAForm;