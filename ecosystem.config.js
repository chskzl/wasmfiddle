module.exports = {
    apps: [{
        name: 'wasmfiddle',
        script: 'app.js',

        error_file: 'logs/err.log',
        out_file: 'logs/out.log',
        log_file: 'logs/combined.log',
        time: true,

        // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
        autorestart: true,

        watch: true,
        watch_delay: 100,
        ignore_watch: ["node_modules", "logs", "views", ".git"],


        max_memory_restart: '300M',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],
};