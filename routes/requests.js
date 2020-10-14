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

router.get('/renderCSSframework', function (req, res) {
    return res.send({ framework: process.env.CSSFRAMEWORK });
});

router.get('/setCSSframework', function (req, res) {
    //only sets the ENV for the process
    let cssframeworkRequest = req.query.CSSFRAMEWORK;
    
    if(typeof cssframeworkRequest !== 'undefined')
    {
        switch (cssframeworkRequest.toLowerCase()) 
        {
            case 'bootstrap':
                process.env.CSSFRAMEWORK = "BOOTSTRAP";
                break;
            case 'foundation':
                process.env.CSSFRAMEWORK = "FOUNDATION";
                break;
            default:
                console.log(`not an allowed CSS framework [${cssframeworkRequest}]`);
        }
    }
    return res.sendStatus(200)
});

router.get('/renderJSframework', function (req, res) {
    return res.send({ framework: process.env.JSFRAMEWORK });
});

router.get('/setJSframework', function (req, res) {
    //only sets the ENV for the process
    let jsframeworkRequest = req.query.JSFRAMEWORK;
    
    if(typeof jsframeworkRequest !== 'undefined')
    {
        switch (jsframeworkRequest.toLowerCase()) 
        {
            case 'react':
                process.env.JSFRAMEWORK = "REACT";
                break;
            case 'angular':
                process.env.JSFRAMEWORK = "ANGULAR";
                break;
            case 'vue':
                process.env.JSFRAMEWORK = "VUE";
                break;
            default:
                console.log(`not an allowed framework [${jsframeworkRequest}]`);
        }
    }
    return res.sendStatus(200)
});

module.exports = router;