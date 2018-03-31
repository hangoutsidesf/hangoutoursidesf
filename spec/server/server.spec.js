import request from 'supertest';

import server from '../../server/server';

describe('App Server', () => {
  test('should respond to /test', () => (
    request(server)
      .get('/test')
      .expect(200)
  ));
});
