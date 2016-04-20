module.exports = function(robot) {
   robot.respond(/\btaming\b ([1-9][0-9]{0,2}) (.*)/i, function(msg){
        var url = "http://www.dododex.com/taming/"+msg.match[2]+"/"+msg.match[1]
        var phantom = require('phantom');
        var sitepage = null;
        var phInstance = null;
        phantom.create()
            .then((instance) => {
                phInstance = instance;
                return instance.createPage();
            })
            .then(page => {
                sitepage = page;
                return page.open(url);
            })
            .then(status => {
                return sitepage.property('title');
            })
            .then(content => {
                msg.reply(content);
                sitepage.close();
                phInstance.exit();
            })
            .catch(error => {
                phInstance.exit();
            });
   });
}