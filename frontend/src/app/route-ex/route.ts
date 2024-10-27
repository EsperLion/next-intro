import { NextRequest } from 'next/server';

export function GET(req: NextRequest) {
  console.log({ headers: [...req.headers] });

  return new Response('Hello', {
    status: 401,
    headers: {
      'WWW-Authenticate':
        'Basic realm="Access to the staging site", charset="UTF-8"',
    },
  });
}
