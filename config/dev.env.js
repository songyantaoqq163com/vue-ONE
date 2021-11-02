'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV_ENV:'"development"',
  URL_PATH: '"https://www.51tagger.com"'
})
