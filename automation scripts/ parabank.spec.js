const { test, expect } = require('@playwright/test');

const baseURL = 'https://parabank.parasoft.com/parabank/index.htm';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

/* TC_01 – Valid Registration */
test('TC_01 Valid Registration', async ({ page }) => {
  await page.click('text=Register');

  await page.fill('#customer.firstName', 'Test');
  await page.fill('#customer.lastName', 'User');
  await page.fill('#customer.address.street', 'Street 1');
  await page.fill('#customer.address.city', 'City');
  await page.fill('#customer.address.state', 'State');
  await page.fill('#customer.address.zipCode', '12345');
  await page.fill('#customer.phoneNumber', '03001234567');
  await page.fill('#customer.ssn', '123456789');
  await page.fill('#customer.username', 'testuser123');
  await page.fill('#customer.password', 'Pass123');
  await page.fill('#repeatedPassword', 'Pass123');

  await page.click('input[value="Register"]');

  await expect(page.locator('text=Welcome')).toBeVisible();
});

/* TC_02 – Password Mismatch */
test('TC_02 Password Mismatch', async ({ page }) => {
  await page.click('text=Register');

  await page.fill('#customer.password', 'Pass123');
  await page.fill('#repeatedPassword', 'Pass456');
  await page.click('input[value="Register"]');

  await expect(page.locator('text=Passwords did not match')).toBeVisible();
});

/* TC_03 – Missing Last Name */
test('TC_03 Missing Last Name', async ({ page }) => {
  await page.click('text=Register');

  await page.fill('#customer.firstName', 'Test');
  await page.click('input[value="Register"]');

  await expect(page.locator('text=Last name is required')).toBeVisible();
});

/* TC_05 – Successful Login */
test('TC_05 Successful Login', async ({ page }) => {
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await expect(page.locator('text=Accounts Overview')).toBeVisible();
});

/* TC_06 – Invalid Password */
test('TC_06 Invalid Password', async ({ page }) => {
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.click('input[value="Log In"]');

  await expect(
    page.locator('text=The username and password could not be verified')
  ).toBeVisible();
});

/* TC_07 – Empty Login */
test('TC_07 Empty Login', async ({ page }) => {
  await page.click('input[value="Log In"]');

  await expect(page.locator('text=error')).toBeVisible();
});

/* TC_08 – Logout */
test('TC_08 Logout', async ({ page }) => {
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('text=Log Out');
  await expect(page.locator('input[value="Log In"]')).toBeVisible();
});

/* TC_22 – Navigation Links */
test('TC_22 Navigation Links', async ({ page }) => {
  await page.click('text=About Us');
  await expect(page).toHaveURL(/about\.htm/);

  await page.click('text=Services');
  await expect(page).toHaveURL(/services\.htm/);

  await page.click('text=Locations');
  await expect(page).toHaveURL(/contact\.htm/);
});
