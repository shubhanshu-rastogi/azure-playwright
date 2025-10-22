# Azure Testing Starter

Playwright UI + API tests with an Azure DevOps pipeline.

## Quick start

```bash
# 1) Install deps
npm ci

# 2) Install browsers
npx playwright install --with-deps

# 3) Run tests locally
npm run test:all

# HTML report: reports/html/index.html
```

## Environment

Set `BASE_URL` to point tests at your app. Default is `https://playwright.dev`.