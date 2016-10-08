/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-blog',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    api: {
        host: 'http://blogapi.loc'
    },
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      }
    },
    flashMessageDefaults: {
      // flash message defaults
      timeout: 3000,
      extendedTimeout: 0,
      priority: 200,
      sticky: true,
      showProgress: true,

      // service defaults
      type: 'alpaca',
      types: [ 'success', 'info', 'warning', 'danger', 'alert', 'secondary' ],
      preventDuplicates: false
    },
    google: {
      apiKey: "435563349460-nlogac9q7njv8n4u8frce38kalmqhgrh.apps.googleusercontent.com",
      secret: 'JAxG5J068Xn1V1xcHDYTfUtr',
      redirect_uri: "http://emberblog.com/"
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
          apiKey: "435563349460-nlogac9q7njv8n4u8frce38kalmqhgrh.apps.googleusercontent.com",
          redirectUri: "http://emberblog.com/"
        }
      }
    },
    firebase: {
      apiKey: 'AIzaSyCFgoFtXG3YuiHwUd7EFuUhHqE5WlY4hkg',
      authDomain: 'emberblog-22b8b.firebaseapp.com',
      databaseURL: 'https://emberblog-22b8b.firebaseio.com/',
      storageBucket: 'emberblog-22b8b.appspot.com',
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }
  ENV['ember-cli-mirage'] = {
            enabled: false
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
