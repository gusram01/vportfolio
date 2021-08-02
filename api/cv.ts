import path from 'path';
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
  const { email } = req.body;
  if (!email) {
    res.statusCode = 400;
    res.end(JSON.stringify({ ok: false, message: 'The email is required' }));
    return;
  }
  try {
    await cors(req, res);

    const info = await transporter.sendMail({
      from: '"admin" <gram.io.dev@gmail.com>',
      to: email,
      subject: 'Gus Ramírez CV',
      html: '<p>This email was sent because the CV was requested from <a href="https://gusramirez.dev">gusramirez.dev</a></p><p>Please see atachments</p>',
      attachments: [
        {
          filename: 'gustavo-ramirez-dev-cv.pdf',
          path: path.resolve(
            __dirname,
            '..',
            'attachments',
            'gustavo-ramirez-dev-cv-withcontact.pdf',
          ),
        },
      ],
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        ok: true,
        data: `The CV was sended to your email with ID: ${
          info.messageId.split('@')[0]
        }`,
      }),
    );
    return;
  } catch (err: any) {
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, message: err.message }));
  }
};
