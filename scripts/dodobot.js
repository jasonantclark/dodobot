module.exports = function(robot) {
    robot.respond(/\btest\b [0-9]|1[0-9][0-9] (.*)/g/i, function(msg){
       msg.reply("test");
    });
}