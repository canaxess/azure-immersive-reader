var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/GetToken', function(req, res) {
    request.post({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: `https://login.windows.net/${process.env.TENANT_ID}/oauth2/token`,
            form: {
                grant_type: 'client_credentials',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                resource: 'https://cognitiveservices.azure.com'
            }
            
        },
        function(err, resq, token) {
            if (err) {
                return res.status(500).send('CogSvcs IssueToken error');
            }
            return res.send(JSON.parse(token).access_token);
        }
    );
});

router.get('/GetSubDomain', function (req, res) {
    return res.send(process.env.SUBDOMAIN);
});

module.exports = router;
