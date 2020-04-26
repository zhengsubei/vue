const NODE_ENV = process.env.NODE_ENV;
const config = {
    production: {
        DOMAIN: 'production.com',
        FOO_API: 'production.foo.api.com',
        BAR_API: 'production.bar.api.com',
        BAZ_API: 'production.baz.api.com'
    },
    development: {
        DOMAIN: 'development.com',
        FOO_API: 'development.foo.api.com',
        BAR_API: 'development.bar.api.com',
        BAZ_API: 'development.baz.api.com'
    }
}
module.exports = config[NODE_ENV];
