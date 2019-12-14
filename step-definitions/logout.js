const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');



Then(/^I logout$/, () => {
    client.pause(4000);
    client.useXpath();
    client.click('//span[@class="popup-menu"]//*[contains(@class,"icon")]');
    return client.click('//*[@id="action-required"]/div/div[1]/header/div/div[2]/div[3]/span/div/div[2]/a');
});

Then(/^I expect element "(.+)"$/, query => {
    client.useXpath();
    client.pause(2000);
    return client.assert.containsText('//*[@id="login-prompt"]/div/div/div[2]/h1',query);
});