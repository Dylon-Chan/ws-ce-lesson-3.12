const { handler } = require('../index');

test('Handler returns the correct response', async () => {
  
  const result = await handler();

  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body)).toEqual({
    message: "Go Serverless v3.0! Your function executed successfully!",
    
  });
});
