window.renuoSentryConfig = window.renuoSentryConfig || {};

renuoSentryConfig['ignoreErrors'] = [
  // Random plugins/extensions
  'top.GLOBALS',
  // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
  'originalCreateNotification',
  'canvas.contentDocument',
  'MyApp_RemoveAllHighlights',
  'http://tt.epicplay.com',
  'Can\'t find variable: ZiteReader',
  'jigsaw is not defined',
  'ComboSearch is not defined',
  'http://loading.retry.widdit.com/',
  'atomicFindClose',
  // Facebook borked
  'fb_xd_fragment',
  // ISP "optimizing" proxy - `Cache-Control: no-transform` seems to reduce this. (thanks @acdha)
  // See http://stackoverflow.com/questions/4113268/how-to-stop-javascript-injection-from-vodafone-proxy
  'bmi_SafeAddOnload',
  'EBCallBackMessageReceived',
  // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
  'conduitPage',
  // Generic error code from errors outside the security sandbox
  // You can delete this if using raven.js > 1.0, which ignores these automatically.
  'Script error.',
  'fsGetSearchListener(...) is not a function',
  // https://github.com/SamsungInternet/support/issues/56
  'document.getElementsByClassName.ToString is not a function',
  // old browser versions #18169
  'AbortController is not defined',
  // see https://github.com/getsentry/sentry-javascript/issues/3440
  'Non-Error promise rejection captured'
];

renuoSentryConfig['blacklistUrls'] = [
  // Facebook flakiness
  /graph\.facebook\.com/i,
  // Facebook blocked
  /connect\.facebook\.net\/en_US\/all\.js/i,
  // Woopra flakiness
  /eatdifferent\.com\.woopra-ns\.com/i,
  /static\.woopra\.com\/js\/woopra\.js/i,
  // Chrome extensions
  /extensions\//i,
  /^chrome:\/\//i,
  // Other plugins
  /127\.0\.0\.1:4001\/isrunning/i,  // Cacaoweb
  /webappstoolbarba\.texthelp\.com\//i,
  /metrics\.itunes\.apple\.com\.edgesuite\.net\//i
];

renuoSentryConfig['beforeSend'] = function(event){
  if (/^(.*CloudFlare-AlwaysOnline.*|.+MSIE 8\.0;.+)$/.test(window.navigator.userAgent)) {
    return null
  } else {
    var match = /Chrome\/(\d+)/g.exec(window.navigator.userAgent);
    if (match && parseInt(match[1]) < 85) {
      return null
    }
    return event;
  }
};
