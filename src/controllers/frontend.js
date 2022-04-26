let me,app, cache;
//import axios
const axios = require('axios');


module.exports = {

	init: function(appPass,next) {
		
		app = appPass;
		me = this;

		cache = [];
		
		next();
	},

	routeRedirect: function (req, res) {
		res.redirect(301, "/"+ process.env.SERVICE_NAME);
	},

	routeSaveForm: function(req, res){
		let payload = req.body;

		res.json({success: true, data: payload});
	},
	// Example for get or save information in database with template
	processRequestDBTest : async function(payload){
		try {
			let resultDB = await app.controller.database.exec.template('615cbba1a76e0c156d93994f', save);
			return true
		
		} catch (error) {
			console.log(error)
			return false
		}
		
		
		
	},
	sincronizarPrecosDeProdutosNoMagento: async function(req, res){
		try {
			// res.send('ok');return true;
			var resultDB = await app.controller.database.exec.template('625863a01e742896796f87bc');
			// console.log(resultDB);return true;

			//call an endpoint based on resultDB data
			let url = 'https://integra.ludipresentes.com.br/lb/product/integrar?key=';
			resultDB.forEach(async (item) => {
				//call an endpoint based on resultDB data
				let urlFinal = url + item[""];
				console.log('Sincronizando produto ' + item[""] + ' no Magento');
				console.log(urlFinal);
				let resultFetch = await axios.get(urlFinal).then(function(response){
					console.log('[sincronizarPrecosDeProdutosNoMagento] Produto '+item[""]+' sincronizado com sucesso!');
					console.log(response.data);
				}).catch(function(error){
					console.log('[sincronizarPrecosDeProdutosNoMagento] Produto '+item[""]+' não foi sincronizado!');
				});
			});

			res.send('Integração de preços realizada com sucesso!');
			return true
		
		} catch (error) {
			console.log(error)
			return false
		}
	}
	


}