import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';


export const hi: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache'
    },
    body: `
      <h1>Hi</h1>
    `
  };
}
