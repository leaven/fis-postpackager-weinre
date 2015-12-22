var os = require('os'),
	en = os.networkInterfaces().en5 || os.networkInterfaces().en0,
	address;

module.exports = function(ret, conf, settings, opt) {
	var weinreScript,
		env = process.env.NODE_ENV,
		defaultSettings = {
			httpPort: 8080,
			env: 'remote'
		};
	if(env && env === settings.env) {
		settings = fis.util.merge(defaultSettings, settings);

		for(var i = 0, len = en.length; i < len; i++) {
			if(en[i].family === 'IPv4') {
				address = en[i].address;
				break;
			}
		}
		weinreScript = '<script src="http://'+address+':'+settings.httpPort+'/target/target-script-min.js#anonymous"></script>';
	    fis.util.map(ret.src, function(subpath, file) {
	        if (file.isHtmlLike) {
	            var content = file.getContent();
	            if (content.indexOf(settings.scriptTag) !== -1){
	            	 content = content.replace(settings.scriptTag, weinreScript);
	            }
	            file.setContent(content);
	        }
	    });
	}else {
		fis.util.map(ret.src, function(subpath, file) {
	        if (file.isHtmlLike) {
	            var content = file.getContent();
	            if (content.indexOf(settings.scriptTag) !== -1){
	            	 content = content.replace(settings.scriptTag, '');
	            }
	            file.setContent(content);
	        }
	    });
	}
};