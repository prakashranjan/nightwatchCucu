const chromedriver = require('chromedriver');



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

    chrome: {
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

    firefox: {
      
      webdriver: {
        start_process : true,
        server_path: "./node_modules/geckodriver/geckodriver.exe",
        cli_args: [
          "--log", "debug"
        ],
        port: 8000
      },
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },

    

    ie: {
      
      webdriver: {
        start_process : true,
        server_path: "./node_modules/iedriver/lib/iedriver64/IEDriverServer.exe",
        cli_args: [
          "--log", "debug"
        ],
        port: 8001
      },
      desiredCapabilities: {
        browserName: 'ie',
        acceptInsecureCerts: true
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },

  }
};