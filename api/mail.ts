import nodeMailer from 'nodemailer';
import Cors from 'cors';
import { NowRequest, NowResponse } from '@vercel/node';
import initMiddleware from '../lib/middelware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST'],
  }),
);

const transporter = nodeMailer.createTransport({
  host: process.env.MAIL_URL,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.verify().then(() => console.log('Mailer ready'));

export default async (req: NowRequest, res: NowResponse) => {
  const { name, email, msg } = req.body;
  try {
    await cors(req, res);

    const info = await transporter.sendMail({
      from: '"admin" <gram.io.dev@gmail.com>',
      to: process.env.RECIPIENT,
      subject: 'New Message from portfolio',
      text: `
  ${name} is sended a new message from ${email}:
  ${msg}`,
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        ok: true,
        data: `Your message: ${msg} was sended with ID: ${info.messageId}`,
      }),
    );
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, message: err.message }));
  }
};
