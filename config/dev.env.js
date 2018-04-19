'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"/@appapi/"',
    BASE_PATH: '"http://pc.lisa.com/"',
    APP_ORIGIN: '"https://wallstreetcn.com"',
    VERSION: '"3.8.1.5"'
})
