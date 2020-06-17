/*jshint esversion: 6 */

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
<<<<<<< HEAD
app.use(express.static(dirname + "/dist/gycedapp-angular/"));
=======
app.use(express.static(__dirname + '/dist/gycedapp-angular/'));
>>>>>>> fcd293b8143595147af6ab1c647626c9fe82e166

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/gycedapp-angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
