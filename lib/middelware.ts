import { NowRequest, NowResponse } from '@vercel/node';

export default function initMiddleware(middleware: Function) {
  return (req: NowRequest, res: NowResponse) => {
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}