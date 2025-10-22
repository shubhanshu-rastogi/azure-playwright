import { test, expect } from '@playwright/test';

test('homepage has title and get started link', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();
});