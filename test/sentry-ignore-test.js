var assert = require('assert');

renuoSentryConfig = {}
window = {navigator: {}, renuoSentryConfig: renuoSentryConfig};
require( "../src/sentry-ignore.js" );

var testEvent = {message: 'Some Error'}
assert(renuoSentryConfig['beforeSend'](testEvent) == testEvent);

window.navigator.userAgent = "Mozilla/5.0 (compatible; CloudFlare-AlwaysOnline/1.0;+http://www.cloudflare.com/always-online)";
assert(renuoSentryConfig['beforeSend'](testEvent) == null);

window.navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36";
assert(renuoSentryConfig['beforeSend'](testEvent) == null);

window.navigator.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
assert(renuoSentryConfig['beforeSend'](testEvent) == testEvent);

