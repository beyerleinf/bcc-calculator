// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-spec-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-average-spec-time-reporter'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {
      'src/**/*.ts': ['coverage'],
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      includeAllSources: true,
      reporters: [{ type: 'cobertura', file: 'cobertura-coverage.xml' }, { type: 'html' }, { type: 'text-summary' }],
    },
    specReporter: {
      maxLogLines: 15,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true,
      failFast: true,
    },
    specTimeReporter: {
      showLongestSpec: true,
      enableThresholds: true,
      max: 500,
      warn: 250,
    },
    reporters: ['spec', 'kjhtml', 'spec-time', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['ChromeNoSandbox'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    singleRun: true,
  });
};
