module.exports = app => {
    app.beforeStart(async () => {
        const cors = require('koa2-cors');
        app.use(cors());
    });
};