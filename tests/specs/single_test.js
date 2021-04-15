describe("Google's Search Functionality", () => {
  it("can find search results", () => {
    browser.url("https://www.google.com/ncr");
    const inputForm = $('[name="q"]');
    inputForm.setValue("BrowserStack");

    try {
      const submitButton = $('[name="btnK"]');
      submitButton.waitForExist(8000);
      submitButton.click(); // this works for desktop
    } catch (e) {
      browser.elementSubmit(inputForm.elementId); // this helps for mobile
    }

    browser.waitUntil(
      () => browser.getTitle().match(/BrowserStack/i),
      5000,
      "Title didn't match with BrowserStack",
      5
    );
  });
});
