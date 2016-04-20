module.exports = function(robot) {
    robot.respond(/\btaming\b ([1-9][0-9]{0,2}) (.*)/i, function(msg){
        var url = "http://www.dododex.com/taming/"+msg.match[2]+"/"+msg.match[1];
        console.log(url);
        var phantom = require('phantom');
        var sitepage = null;
        var phInstance = null;
        phantom.create()
            .then(function(instance) {
                phInstance = instance;
                return instance.createPage();
            })
            .then(function(page) {
                sitepage = page;
                return page.open(url);
            })
            .then(function(status) {
                return sitepage.property('title');
            })
            .then(function(content) {
                msg.reply(content);
                sitepage.close();
                phInstance.exit();
            })
            .catch(function(error) {
                phInstance.exit();
            });

    });
}





/*

        


            */