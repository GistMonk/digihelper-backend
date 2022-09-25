const express = require("express");

var router = express.Router();

router.get("/auth", function (req, res, next) {
  res.status(200).json({
    success: true,
    message: "Welcome to Digi Helper Auth Service",
    endpoints: ["POST /auth/login"],
  });
});

router.post("/auth/login", function (req, res, next) {
  try {
    const phone = req.body.phone;
    console.log(phone);
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: "Your OTP code is 1238432. Please enter it to login, DO NOT SHARE IT WITH ANYONE",
        from: "whatsapp:+14155238886",
        to: "whatsapp:+91" + phone,
      })
      .then((message) => {
        res.status(200).json({
          success: true,
          message: "OTP sent successfully",
          sid: message.sid,
        });
      })
      .done();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error: " + err,
    });
  }
});

module.exports = router;
