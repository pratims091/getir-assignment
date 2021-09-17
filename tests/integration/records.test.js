import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../../src/app';

/* TODO: configure and use test DB with tear up/down
* using beforeAll,beforeEach,afterEach,afterAll methods
*/

describe('/api/v1/records', () => {
  const validRequestParams = {
    startDate: '2017-01-01',
    endDate: '2021-12-31',
    minCount: 0,
    maxCount: 300,
  };
  const invalidRequestParamsDate = {
    startDate: '01-01-2017',
    endDate: '31-12-2021',
    minCount: 0,
    maxCount: 300,
  };
  const invalidRequestParamsCount = {
    startDate: '2017-01-01',
    endDate: '2021-12-31',
    minCount: Number.MIN_SAFE_INTEGER,
    maxCount: 300,
  };
  test('Required params not present - It should return 422 - invalid request', async () => {
    const response = await request(app).get('/api/v1/records');
    expect(response.statusCode).toBe(422);
    const {
      body: responseBody,
    } = response;
    expect(responseBody).toBeInstanceOf(Object);
    expect(responseBody).toHaveProperty('code', 'errors', 'msg');
    expect(responseBody.code).toBe(422);
    expect(responseBody.msg).toBe('Invalid request');
  });
  test('Required params present - invalid date format - It should return 422 - invalid request', async () => {
    const response = await request(app).get('/api/v1/records').query(invalidRequestParamsDate);
    expect(response.statusCode).toBe(422);
    const {
      body: responseBody,
    } = response;
    expect(responseBody).toBeInstanceOf(Object);
    expect(responseBody).toHaveProperty('code', 'errors', 'msg');
    expect(responseBody.code).toBe(422);
    expect(responseBody.msg).toBe('Invalid request');
    expect(responseBody.errors.length).toBe(2);
    expect(responseBody.errors[0]).toHaveProperty('value', 'msg', 'param', 'location');
    // assert express-validator's errors schema
    expect(responseBody.errors[0]).toEqual({
      value: '01-01-2017',
      msg: 'Invalid value',
      param: 'startDate',
      location: 'query',
    });
    expect(responseBody.errors[1]).toHaveProperty('value', 'msg', 'param', 'location');
    expect(responseBody.errors[1]).toEqual({
      value: '31-12-2021',
      msg: 'Invalid value',
      param: 'endDate',
      location: 'query',
    });
  });
  test('Required params present - invalid count format - It should return 422 - invalid request', async () => {
    const response = await request(app).get('/api/v1/records').query(invalidRequestParamsCount);
    expect(response.statusCode).toBe(422);
    const {
      body: responseBody,
    } = response;
    expect(responseBody).toBeInstanceOf(Object);
    expect(responseBody).toHaveProperty('code', 'errors', 'msg');
    expect(responseBody.code).toBe(422);
    expect(responseBody.msg).toBe('Invalid request');
    expect(responseBody.errors.length).toBe(1);
    expect(responseBody.errors[0]).toHaveProperty('value', 'msg', 'param', 'location');
    expect(responseBody.errors[0]).toEqual({
      value: Number.MIN_SAFE_INTEGER.toString(),
      msg: 'Invalid value',
      param: 'minCount',
      location: 'query',
    });
  });
  test('Required params present - valid params - It should return 200', async () => {
    const response = await request(app).get('/api/v1/records').query(validRequestParams);
    expect(response.statusCode).toBe(200);
    const {
      body: responseBody,
    } = response;
    expect(responseBody).toBeInstanceOf(Object);
    expect(responseBody).toHaveProperty('code', 'records', 'msg');
    expect(responseBody.code).toBe(0);
    expect(responseBody.msg).toBe('Success');
    expect(responseBody.records.length).toBeGreaterThan(0);
    expect(responseBody.records[0]).toHaveProperty('key', 'createdAt', 'totalCount');
  });
});
