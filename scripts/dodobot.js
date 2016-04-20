module.exports = function(robot) {
    robot.respond(/\bWhat do I need to tame a level\b ([1-9][0-9]{0,2}) (.*)/i, function(msg){
      var url = "http://www.dododex.com/taming/"+msg.match[2]+"/"+msg.match[1]+"/" 
			page.open(url, function (status) {
			phantom.exit();			
       msg.reply(page.title);
    });
}