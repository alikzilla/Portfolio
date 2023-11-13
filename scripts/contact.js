const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace with your email configuration
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "nuspekovalihan@gmail.com",
        pass: "Alikhansuper16"
    }
});

app.post("/sendEmail", (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "yermekalbina@gmail.com", // Replace with the recipient's email address
        subject: `New contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.json({ success: false });
        } else {
            console.log("Email sent:", info.response);
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
