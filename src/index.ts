export interface ApiResponse {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
}

export const handler = async (
  event: any,
  context: any
): Promise<ApiResponse> => {
  console.log('Event:', JSON.stringify(event, null, 2));
  console.log('Context:', JSON.stringify(context, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'not set',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
