const request = require('supertest');
const app = require('../src/app');

describe('/quotes', () => {
  test('GET /quotes should respond with a quotes array', async () => {
    const response = await request(app).get('/quotes');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Array);
  });

  test('GET /quotes/:id should respond with an object when the ID is valid', async () => {
    const response = await request(app).get('/quotes/mH_m-Xmw1dk');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Object);
  });

  test('GET /quotes/:id with an invalid ID returns a 404', async () => {
    const response = await request(app).get('/quotes/hacky');
    expect(response.statusCode).toBe(404);
  });
});

describe('/authors', () => {
  test('GET /authors should respond with a authors array', async () => {
    const response = await request(app).get('/authors');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Array);
  });

  test('GET /authors/:id should respond with an object when the ID is valid', async () => {
    const response = await request(app).get('/authors/jFYtDAg5Ott5');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Object);
  });

  test('GET /authors/:id with an invalid ID returns a 404', async () => {
    const response = await request(app).get('/authors/hacky');
    expect(response.statusCode).toBe(404);
  });
});

describe('/tags', () => {
  test('GET /tags should respond with a tags array', async () => {
    const response = await request(app).get('/tags');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Array);
  });

  test('GET /tags/:id should respond with an object when the ID is valid', async () => {
    const response = await request(app).get('/tags/Gq75KBrfb');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Object);
  });

  test('GET /tags/:id with an invalid ID returns a 404', async () => {
    const response = await request(app).get('/tags/hacky');
    expect(response.statusCode).toBe(404);
  });
});
