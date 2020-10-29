var Steps = require('screener-runner/src/steps');
module.exports = {
  // full repository name for your project:
  projectRepo: 'alexgriffen/stepsTest',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,
  baseBranch: 'master',
  failureExitCode: 0,
//  ignore: '.dxGwqD',
  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.
  // sauce: {
//    username: process.env.SAUCE_USERNAME,
//    accessKey: process.env.SAUCE_ACCESS_KEY,
//    maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
//    extendedDebugging: true, // optional
//    tunnelIdentifier: 'USWEST' // optional
//    launchSauceConnect: true // have screener-runner manage my sauce connect tunnels for me
  // },
  states: [
    {
      url: 'https://www.saucedemo.com/',
      name: 'Sauce Labs',
      steps: new Steps()
        .setValue('#user-name', 'standard_user')
        .clearValue('#password')
        .setValue('#password', 'secret_sauce', {isPassword: true})
        .click('.btn_action')
        .snapshot('login')
        .end()
    },
    {
      url: 'https://screener.io/',
      name: 'Screener'
    },
    {
      url: 'https://saucelabs.com/platform/visual-testing',
      name: 'Subtle internal nod'
    }
  ],
  newSessionForEachState: true,
  browsers: [
    {
     browserName: 'chrome'
    },
    {
      browserName: 'firefox'
    }
//    {
//       browserName: 'chrome',
//       version: '79.0'
//    },
//    {
//      browserName: 'microsoftedge',
//      version: '17.17134'
//    },
//    {
//      browserName: 'firefox',
//      version: '71.0'
//    },
//    {
//      browserName: 'safari',
//      version: '11.1'
//    }
  ]
};
