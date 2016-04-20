module.exports = function(robot) {
    robot.respond(/\bWhat do I need to tame a level\b ([1-9][0-9]{0,2}) (.*)/i, function(msg){
       msg.reply(msg.match[1]);
    });
}