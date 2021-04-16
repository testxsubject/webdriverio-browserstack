describe("Google's Search Functionality", () => {
  it("can find search results", () => {
    browser.url("https://www.google.com/ncr");
    const inputForm = $("//input[@name='q']");
    inputForm.setValue(["BrowserStack", "Enter"]); // this helps in majority desktops

    try {
      browser.waitUntil(() => browser.getTitle().match(/BrowserStack/i));
    } catch (e) {
      browser.elementSubmit(inputForm.elementId); // this helps in remaining cases, i.e. iPhone
    }

    browser.waitUntil(
      () => browser.getTitle().match(/BrowserStack/i),
      5000,
      "Title didn't match with BrowserStack"
    );
  });
});
