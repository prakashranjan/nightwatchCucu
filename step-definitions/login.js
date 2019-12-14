const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open projecthub page$/, () => {
  return client.url('https://projecthubstage.hilton.com').waitForElementVisible('body', 1000);
});

Then(/^I open admin login page$/, () => {
//   return client.click("#login-prompt > div > div > div:nth-child(3) > form > div:nth-child(5) > div > a:nth-child(3)");
    client.useXpath();
    return client.click('/html/body/div[1]/div/div/div[3]/form/div[3]/div/a[2]');
});

 Then(/^I login as Admin$/, () => {
    client.useXpath();
    client.pause(3000);
    client.setValue('//*[@id="identifierInput"]',"prsingh04");
    client.click('//*[@id="btnLogin"]');
    client.pause(3000);
    client.click('//*[@id="password"]');
    client.setValue('//*[@id="password"]',"Ddd@7856");
    return client.click('//*[@id="btnLogin"]');
   });

Then(/^I expect element "(.+)" to be present$/, query => {
    client.useXpath();
    client.pause(4000);
    return client.assert.containsText('//*[@id="action-required"]/div/div[1]/div[1]/div/div/div[1]/div/p',query);
});