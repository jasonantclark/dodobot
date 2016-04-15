

module.exports = function(robot) {
    robot.respond(/taming/i, function(msg){


    		var test="";
			var phantom = require("phantom");
			var _ph, _page, _outObj;

			phantom.create().then(ph => {
			    _ph = ph;
			    test += "start2"
			    return _ph.createPage();
			}).then(page => {
			    _page = page;
			    return _page.open('http://www.dododex.com/');
			}).then(status => {
			    //console.log(status);
			    return _page.property('title')
			}).then(content => {			    
			    msg.reply(content);
			    _page.close();
			    _ph.exit();
			});

















        
    });
}






