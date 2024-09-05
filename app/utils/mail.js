"use server";
const nodemailer = require('nodemailer');
require('dotenv').config();

const mg = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async (email, name, message) => {
  const data = {
    from: {
      name: 'Personal Portfolio',
      address: 'testblockevents@gmail.com',
    },
    to: 'dtindiwensi@gmail.com',
    subject: 'Contact from Portfolio Site',
    text: `${name}, ${email} would like to contact you regarding \n/
      ${message}`,
  };
  mg.sendMail(data)
    .then(() => true)
    .catch((err) => {
      console.log('Error: ', err);
      throw new Error(err);
    });
};

export default sendMail;