module.exports = function(robot) {
    robot.respond(/\bWhat do I need to tame a level\b ([0-9]|1[0-9][0-9]) (.*)/i, function(msg){
       msg.reply("test");
    });
}