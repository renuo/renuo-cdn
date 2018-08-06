# renuo-cdn
Renuo CDN to deliver common projects resources.
You can access the CDN at https://cdn.renuo.ch.

Resources are served with an expiring time of 7 days.

[![Build Status](https://semaphoreci.com/api/v1/renuo/renuo-cdn/branches/master/badge.svg)](https://semaphoreci.com/renuo/renuo-cdn)

# Resources

## raven.min.js

raven.min.js is updated very frequently.
In this repo we keep the most recent version and all our projects point to it.
Please find the latest version at the [Official GitHub Repo](https://github.com/getsentry/sentry-javascript/blob/master/packages/raven-js/dist/raven.js)

## raven-ignore.min.js

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

1. Clone the project
2. Execute `bin/fetch_latest`. This will check for a newer version and download it.
3. Commit the new version on master.

Done :tada: .

The CI will automatically deploy the newer version.

# Copyright

Coypright 2018 [Renuo AG](https://www.renuo.ch/).
