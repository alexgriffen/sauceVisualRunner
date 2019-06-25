## sauceVisualRunner

This is intended to help with getting familiar with Sauce Visual (Screener) Runner. This code is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify this framework. Issues regarding this framework should be submitted through GitHub. This framework is not maintained by Sauce Labs/Screener Support.

### Setup

(This is assuming you're ready to run `npm` commands - check by running `npm -v` in your favorite commandline tool. If you need to install npm: https://www.npmjs.com/get-npm)

Get your Screener API Key from your screener.io account API Key page: https://screener.io/v2/account/api-key

1. On your machine, export your Screener API Key in your .bashrc or .bash_profile file:
```
export SCREENER_API_KEY="ENTER_YOUR_APIKEY_HERE"
```

### Installation

1. Git clone this repo

2. Install Screener-Runner:

```
$ npm install --save-dev screener-runner
```

### Run Tests

Run this command:

```
$ npm run test-screener
```

### Modify

To make updates, add/change urls in the `screener.config.js` file. You can also add:

- [Interactions](https://github.com/screener-io/screener-runner/blob/master/README.md#testing-interactions), which are similar to lightweight selenium steps

- [Responsive Design Tests](https://github.com/screener-io/screener-runner/blob/master/README.md#testing-interactions)

- [Cross Browser Tests](https://github.com/screener-io/screener-runner/blob/master/README.md#testing-interactions)
