const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open Duck's search page$/, () => {
  return client.url('https://duckduckgo.com/').waitForElementVisible('body', 1000);
});



Then(/^the Duck search form exists$/, () => {
  return client.assert.visible('input[id="search_form_input_homepage"]');
  
});