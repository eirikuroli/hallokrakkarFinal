var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

router.post('/',function(req,res,next) {

    let from = req.body.from;
    let subject = req.body.subject;
    let message = req.body.message;

    let messagefrom = from + "\n" + message;

    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service:'Yahoo',
        secure: false,
        auth: {
            user: 'hallokrakkartest@yahoo.com',
            pass: 'wfxeyxnpluattiob'
        },
        debug: false,
        logger: true
    });

    let mailOptions = {
        from: 'hallokrakkartest@yahoo.com',
        to: 'hallokrakkartest@yahoo.com',
        subject: subject,
        html: messagefrom
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.redirect("/");
        }
    });

});

module.exports = router;
