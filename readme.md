# How to Use npm as a Build Tool

> NPM has a great subset of functionality decidated to running tasks to facilitate in a packages lifecycle - in other words, it is a great tool for build scripts.

# Build Setup

``` bash
# install dependencies
npm install

# serve at localhost:9090
npm run dev
```

## Notes

Several scripts use the `npm` `-s` flag to silence `npm`'s output from the subtasks, which makes the log output a little tidier (it is a shortcut for --loglevel=silent, read more on npms documentation for flags: https://docs.npmjs.com/misc/config#default-configs).
