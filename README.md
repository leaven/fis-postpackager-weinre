# fis-postpackager-weinre
用于fis自动嵌入weinre脚本的插件
## 用法

	$ npm install -g fis-postpackager-weinre
	$ vim ~/.bash_profile
	$ export NODE_ENV=remote
	$ vim fis-conf.js

```
fis.config.set('modules.postpackager', 'weinre');
fis.config.set('settings.postpackager.weinre.scriptTag','<!--WEINRE-->');
fis.config.set('settings.postpackager.weinre.httpPort', 8080);
fis.config.set('settings.postpackager.weinre.env', 'remote');`
```

## 配置项
### scriptTag
在html占位符，用于替换weinre的链接
### httpPort
weinre开启的端口号，默认8080
### env
配置的系统环境变量，默认remote