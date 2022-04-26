var os = require('os');
// if(os.hostname() == 'img-srv-052.imaginarium.local'){ process.env.NODE_ENV = 'prod'; }
var hades = require('./hades');
var configPath = (process.env.NODE_ENV && process.env.NODE_ENV==='prod') ? './serviceConfig.json' : './serviceConfig-dev.json'
var configFile = require(configPath);
var json2xls = require('json2xls');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();


// para rodar em producao
// NODE_ENV=prod node index.js
hades.Create({
		
	configFile: configPath, //configuracoes DESTE service
	
	controllers: './src/controllers', //pasta com controllers deste service
		
	eventService: false, //se cria mensageria de eventos RabbitMQ
	
	sendMonitorData: false,
	
	apis: [{
		type : 'http',
		name : `${configFile.serviceName}`,
		staticPath : './src/www/static',
		routesPath : './src/www/routes',
		viewsPath : './src/www/static',
		proxyService : 'apiGateway',
		proxyPath : `/${configFile.serviceName}`,
		port : [configFile.apiPort],
		serverUse: [json2xls.middleware]
	}],


	models: [],
	
	onReady: function() {
		this.log('[index][server] ' + os.hostname())
		this.log('[App] OnReady');
		
	}
	
});