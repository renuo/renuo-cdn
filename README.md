# renuo-cdn

Renuo customised CDN to deliver common projects resources

[![Build Status](https://semaphoreci.com/api/v1/renuo/renuo-cdn/branches/introduce_src_and_dist_folders/badge.svg)](https://semaphoreci.com/renuo/renuo-cdn)

# Content of the CDN

## raven.js

raven.min.js is updated frequently.
In this repo we keep the most recent version and all our projects point to it.

## raven-ignore.js

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

# Copyright

Coypright 2018 [Renuo AG](https://www.renuo.ch/).
