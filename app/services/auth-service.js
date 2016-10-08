import Ember from 'ember';
import config from './../config/environment';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Service.extend({
    torii: Ember.inject.service(),
    store: Ember.inject.service(),
    accessToken: null,
    isAuthenticated: Ember.computed.bool('accessToken'),

    init(){
      this._super(...arguments);
      this.initializeFromCookie();
    },

    initializeFromCookie: function () {
        let accessToken = window.Cookies.get('accessToken');
        if (accessToken) {
            this.setAccessToken(accessToken);
        }
    },

    getAuthCode() {
        let self = this;
        return self.get('torii').open('google-oauth2').then(
            authorization => {
                return authorization.authorizationCode;
            });
    },

    setAccessToken(accessToken) {
        this.set('accessToken', accessToken);
        Cookies.set('accessToken', accessToken);
    },

    getAccessToken(authorizationCode) {
        return Ember.$.post('https://www.googleapis.com/oauth2/v3/token',
            {
                code: authorizationCode,
                redirect_uri: config.google.redirect_uri,
                client_id: config.google.apiKey,
                grant_type: 'authorization_code',
                client_secret: config.google.secret
            }).then(
            response => {
                return response;
            }
        );
    },

    authenticate() {
        return new Ember.RSVP.Promise((resolve, reject) => {
            this.getAuthCode().then(authorizationCode => {
                    this.getAccessToken(authorizationCode).then(
                        response => {
                            Ember.$.ajax({
                                type: 'GET',
                                url: config.api.host + '/auth/google' + '?access_token=' + response.access_token,
                                dataType: 'json'
                            }).then(result => {
                                this.setAccessToken(result.access_token);
                                resolve(result);
                            }, error => {
                                reject(error);
                            });
                        }, error => {
                            reject(error);
                        }
                    );
                }, error => {
                    reject(error);
                }
            );
        });
    },

    unauthenticate() {
      Cookies.remove('accessToken');
      this.set('accessToken', false);
    }
});
