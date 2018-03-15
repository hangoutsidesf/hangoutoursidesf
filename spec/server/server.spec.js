import request from 'supertest';

import server from '../../server/server';

describe('App Server', () => {
  test('should respond to /test', () => (
    request(server)
      .get('/test')
      .expect(200)
  ));
  test('should 404 to non-existent route', () => (
    request(server)
      .get('/yolo/1235')
      .expect(404)
  ));
});
