import { test, expect, request } from '@playwright/test';

test('API ping example', async () => {
  const api = await request.newContext();
  const res = await api.get('https://api.github.com/zen');
  expect(res.ok()).toBeTruthy();
  const text = await res.text();
  expect(typeof text).toBe('string');
});