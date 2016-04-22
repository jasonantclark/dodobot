webshot = require('webshot');
request = require('request');
fs = require('fs');

module.exports = function(robot) {
    robot.respond(/\btaming\b ([1-9][0-9]{0,2}) (.*)/i, function(msg){
		if (msg.match[2] == 'argy') {msg.match[2] = 'argentavis'}
		if (msg.match[2] == 'giga') {msg.match[2] = 'giganotosaurus'}
        var readurl = "http://www.dododex.com/taming/"+msg.match[2]+"/"+msg.match[1];
        var slackapiurl = 'https://slack.com/api/files.upload'
        var filepath = 'dododex.png'
        var room = msg.message.room
		var options = {
			captureSelector: ".tamingTable"
		};

        webshot(readurl, filepath, options, function(err) {
                var form = {
                file: fs.createReadStream(filepath),
                filename: filepath,
				token: process.env.HUBOT_SLACK_TOKEN,
                channels: room,
                initial_comment:'All Rights Reserved dododex.com'};
            request.post({url:slackapiurl, formData: form}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    });
}
