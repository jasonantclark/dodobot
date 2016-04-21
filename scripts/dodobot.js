module.exports = function(robot) {
    robot.respond(/\btaming\b ([1-9][0-9]{0,2}) (.*)/i, function(msg){
        var url = "http://www.dododex.com/taming/"+msg.match[2]+"/"+msg.match[1];
		var webshot = require('webshot');
		webshot(url, 'dododex.png', function(err) {
		});
    });
}