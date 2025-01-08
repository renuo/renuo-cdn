# renuo-cdn
Renuo CDN to deliver common projects resources.
You can access the CDN at https://cdn.renuo.ch.

Resources are served with an expiring time of 7 days.
This means that if you want to refresh your content right away you need to invalidate the [cloudfront distribution](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=eu-central-1#/distributions/E1RNYS7VG5ZEQP/invalidations) as well as the [cloudflare cache](https://dash.cloudflare.com/0e634a111c5f8865a11fa627b8fcc8a3/renuo.ch/caching/configuration).

# Resources

## sentry-ignore.min.js

A non-exhaustive list of urls and js errors we always want to ignore.
Please read about [js decuttering here](https://docs.sentry.io/platforms/javascript/#decluttering-sentry).


## OUTDATED. PLEASE DO NOT USE: raven.min.js

raven.min.js is updated very frequently.
In this repo we keep the most recent version and all our projects point to it.
Please find the latest version at the [Official GitHub Repo](https://github.com/getsentry/sentry-javascript/blob/master/packages/raven-js/dist/raven.js)

## OUTDATED. PLEASE DO NOT USE: raven-ignore.min.js

A non-exhaustive list of urls and js errors we always want to ignore.
Please read about [js decuttering here](https://github.com/getsentry/raven-js/blob/master/docs/tips.rst#decluttering-sentry).


# Build

```sh
    bin/build
```

# Tests / Checks

```sh
    bin/check
```

# How to update the CDN

The CI will automatically deploy the newer version once merged on master.

# Copyright

Copyright 2019-2020 [Renuo AG](https://www.renuo.ch/).
