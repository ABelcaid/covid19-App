const {createLogger, format, transports} = require('winston')
require('winston-mongodb')

module.exports = createLogger({
    format: format.combine(
        format.json(),
        format.timestamp()
        // format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize: 555555444,
            maxFiles: 5,
            filename: `${__dirname}/./logs/log-api.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ],

    transports: [
        new transports.MongoDB({
            maxsize: 555555444,
            maxFiles: 5,
            db: 'mongodb://localhost/ecommerce',
            options: { useUnifiedTopology: true }
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})