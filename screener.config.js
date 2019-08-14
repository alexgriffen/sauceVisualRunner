var Steps = require('screener-runner/src/steps');
module.exports = {
  // full repository name for your project:
  projectRepo: 'alexgriffen/stepsTest',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,
  baseBranch: 'master',
  failureExitCode: 0,
  // ignore: '.dxGwqD',
  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.
  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
    // extendedDebugging: true, // optional
    tunnelIdentifier: 'USWEST' // optional
  },
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
      url: 'https://www.google.com/search?hl=en&authuser=0&tbm=isch&source=hp&biw=1440&bih=765&ei=T5wSXYH8GZ-w0PEP5K2j8A8&q=cute+puppies&oq=cute+puppies&gs_l=img.3..0l10.3194.5428..5562...1.0..0.67.813.14......0....1..gws-wiz-img.....0..0i10i24.8j1dZf6A_Qs',
      name: 'Cute Puppies'
    }
  ],
  newSessionForEachState: true,
  browsers: [
    // {
    //   browserName: 'chrome',
    //   version: '74.0'
    // },
    {
      browserName: 'chrome'
    },
    {
      browserName: 'microsoftedge',
      version: '17.17134'
    },
    // {
    //   browserName: 'firefox',
    //   version: '68.0'
    // },
    {
      browserName: 'firefox'
    },
    {
      browserName: 'safari',
      version: '11.1'
    }
  ]
};
