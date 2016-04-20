module.exports = function(robot) {
    robot.respond(/taming/i, function(msg){
       msg.reply("test");
    });
}