var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const urlMetadata = require('url-metadata')

var port = process.env.PORT || 3000;
var router = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
app.get('/getCodeList', (req, res) => {
    axios
})
app.post('/getMeta', function (req, res) {
    urlMetadata(req.body.url).then(
        function (metadata) { // success handler
            res.json({
                message: metadata
            });
        },
        function (error) { // failure handler
        })

});

// urlMetadata('http://bit.ly/2ePIrDy').then(
//     function (metadata) { // success handler
//         console.log(metadata)
//     },
//     function (error) { // failure handler
//         console.log(error)
//     })