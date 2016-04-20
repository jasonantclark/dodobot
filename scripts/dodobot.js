module.exports = function(robot) {
    robot.respond(/\btest\b 1[0-9][0-9] (.*)/i, function(msg){
       msg.reply("test");
    });
}