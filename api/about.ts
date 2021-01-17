import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).json({
    ok: true,
    data:
      'This is the first message send from vanilla portfolio with vercel serverless',
  });
};
