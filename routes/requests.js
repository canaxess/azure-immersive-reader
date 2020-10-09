var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/getimmersivereadertoken', function(req, res) {
    request.post({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: `https://login.windows.net/${process.env.TENANT_ID}/oauth2/token`,
            form: {
                grant_type: 'client_credentials',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                resource: 'https://cognitiveservices.azure.com/'
            }
        },
        function(err, resp, token) {
            if (err) {
                return res.status(500).send('CogSvcs IssueToken error');
            }

            return res.send(JSON.parse(token).access_token);
        }
    );
});

router.get('/subdomain', function (req, res) {
    return res.send(process.env.SUBDOMAIN);
})

router.get('/renderframework', function (req, res) {
    return res.send({ framework: process.env.FRAMEWORK });
});

router.get('/setframework', function (req, res) {
    //only sets the ENV for the process
    let frameworkRequest = req.query.FRAMEWORK;
    
    if(typeof frameworkRequest !== 'undefined')
    {
        switch (frameworkRequest.toLowerCase()) 
        {
            case 'react':
                console.log(`REACT requested`);
                process.env.FRAMEWORK = "REACT";
                break;
            case 'angular':
                console.log(`ANGULAR requested`);
                process.env.FRAMEWORK = "ANGULAR";
                break;
            case 'vue':
                console.log(`VUE requested`);
                process.env.FRAMEWORK = "VUE";
                break;
            default:
                console.log(`not an allowed framework [${frameworkRequest}]`);
        }
    }
    return res.sendStatus(200)
});

module.exports = router;