/**
 * Required External Modules
 */

const express = require("express");
const os = require('os');
const SignalFxCollect = require('signalfx-collect');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || '8000';
const signalFxConfig = {
    accessToken: '123456',
    ingestEndpoint: 'https://ingest.ap0.signalfx.com',
    extraDimensions: {
        appName: 'test-nodejs-app',
        env: 'LOCALHOST',
        hostname: os.hostname()
    },
    interval: 1000
};
const collect = new SignalFxCollect(signalFxConfig);

/**
 *  App Configuration
 */
collect.start();
app.use(collect.getMiddleware('express'));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("SIGNAL-FX test app is running");
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
