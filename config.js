module.exports = {
    "title": "portal",
    "routerMode": "hash",
    "components": {
        "portal": {
            "moduleName": "@portal/config",
            "origin": "http://localhost:8233",
            "entry": "/config.js"
        }
    },
    "common-deps": {
        "development": {
            "react": "/react.development.js",
            "react-dom": "/react-dom.development.js",
            "react-dom/server": "/react-dom-server.browser.development.js",
            "single-spa": "/single-spa.min.js",
            "lodash": "/lodash.js",
            "rxjs": "/rxjs.umd.js",
            "vue": "/vue.js",
            "vuex": "/vuex.js",
            "vue-router": "/vue-router.js",
            "axios": "/axios.js"
        },
        "production": {
            "react": "/react.production.min.js",
            "react-dom": "/react-dom.production.min.js",
            "react-dom/server": "/react-dom-server.browser.production.min.js",
            "single-spa": "/single-spa.min.js",
            "lodash": "/lodash.min.js",
            "rxjs": "/rxjs.umd.min.js",
            "vue": "/vue.min.js",
            "vuex": "/vuex.min.js",
            "vue-router": "/vue-router.min.js",
            "axios": "/axios.min.js"
        }
    },
    "common-deps-origin": {
        "development": "http://localhost:8200",
        "production": "./common-deps-static"
    },
    "common-deps-conf": {
        "development": "http://localhost:8234",
        "production": "./common-deps"
    }
}