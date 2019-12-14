const chromedriver = require('chromedriver');
// const chromedriver = require('geckodriver');
// const chromedriver = require('iedriver');

module.exports = {
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 8080,
        cli_args: ['--port=8080']
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },

    // firefox: {
    //   webdriver: {
    //     start_process: true,
    //     server_path: geckodriver.path,
    //     port: 8080,
    //     cli_args: ['--port=8080']
    //   },
    //   desiredCapabilities: {
    //     browserName: 'firefox'
    //   },
    //   screenshots: {
    //     enabled: true,
    //     path: 'screenshots'
    //   }
    // },

    // ie: {
    //   webdriver: {
    //     start_process: true,
    //     server_path: iedriver.path,
    //     port: 8080,
    //     cli_args: ['--port=8080']
    //   },
    //   desiredCapabilities: {
    //     browserName: 'ie'
    //   },
    //   screenshots: {
    //     enabled: true,
    //     path: 'screenshots'
    //   }
    // }
  }
};