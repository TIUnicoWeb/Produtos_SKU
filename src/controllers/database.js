var me,app,
moment = require('moment'),
queue = require('async/queue');

module.exports = {

	init: function(appPass,next) {
		
		app = appPass;
		me = this;


		me.createQueue()
		
		next();

	},
	
	onReady: function() {
		// 
	},

	createQueue: function() {
		me.queue = queue(({templateId, params}, callback) => {
			var dataStartTpl = moment().format('DD/MM/YYYY HH:mm:ss');
			app.service('templateService').post({
				url : '/template/' + templateId,
				params : {data: JSON.stringify(params || {})},
				error : function(err) {

					if (err.error && err.error.message) return callback(err.error.message)

					if (err.error) return callback(err.error)

					return callback(err || 'Ocorreu um erro no app.service Template!');
					
				},callback : function(result) {
					// console.log('Finalizado getTPL ' + templateId + ' no EFDB iniciado as ' + dataStartTpl + ' e finalizado as ' + moment().format('DD/MM/YYYY HH:mm:ss'))
					var dataStartQuery = moment().format('DD/MM/YYYY HH:mm:ss');
					// if(templateId == '5c6334038af05df132340684'){ console.log(result.data) }
					me.exec.query(result.data)
						.then((res) => {
							
							// console.log('Finalizada a consulta ' + templateId + ' no EFDB iniciada as ' + dataStartQuery + ' e finalizada as ' + moment().format('DD/MM/YYYY HH:mm:ss'))
							return callback(null, res)
						})
						.catch(err => {
							return callback(err)
						})
					
				}
				
			});

		}, 500);
	},

	exec: {
		query: function(query) {
			// console.log(query)
			return new Promise((resolve, reject) => {
				// console.log('VEIO AQUI ERROR PROMISE REJECT QUERY 1')
				var dataStartQuery = moment().format('DD/MM/YYYY HH:mm:ss');
				app.service('EFDB').post({
					url : '/query',
					params : { query },
					error : function(err) {
						me.error(query);
						me.error(JSON.stringify(err));
						console.log('VEIO AQUI ERROR PROMISE REJECT QUERY 2')
						if (err.error && err.error.message) return reject(err.error.message)

						if (err.error) return reject(err.error)
						
						return reject(err || 'Ocorreu um erro no app.service LinxService!');

					}, callback : function(dataDb) {
						// console.log('Finalizada a consulta  ' +  query.substring(0, 200) + ' no EFDB iniciada as ' + dataStartQuery + ' e finalizada as ' + moment().format('DD/MM/YYYY HH:mm:ss'))
						// console.log(dataDb)

						return resolve(dataDb.data)

					}
				});
				
			})

		},

		queryPuket: function(query) {
			console.log(query)
			return new Promise((resolve, reject) => {
				console.log('VEIO AQUI ERROR PROMISE REJECT QUERY 1')
				var dataStartQuery = moment().format('DD/MM/YYYY HH:mm:ss');
				app.service('DBPuket').post({
					url : '/query',
					params : { query },
					error : function(err) {
						me.error(query);
						me.error(JSON.stringify(err));
						console.log('VEIO AQUI ERROR PROMISE REJECT QUERY 2')
						if (err.error && err.error.message) return reject(err.error.message)

						if (err.error) return reject(err.error)
						
						reject(err || 'Ocorreu um erro no app.service LinxService!');

					}, callback : function(dataDb) {
						// console.log('Finalizada a consulta  ' +  query.substring(0, 200) + ' no EFDB iniciada as ' + dataStartQuery + ' e finalizada as ' + moment().format('DD/MM/YYYY HH:mm:ss'))
						// console.log(dataDb)

						resolve(dataDb.data)

					}
				});
				
			})

		},

		template : function(templateId, params, sendToQueue){

			if(sendToQueue) {

				return new Promise((resolve, reject) => {

					me.queue.push({templateId, params}, (err, results) => {
						if(err) return reject(err)

						resolve(results)
					})

				})

			}

			return new Promise((resolve, reject) => {
				// console.log('VEIO AQUI ERROR PROMISE REJECT TEMPLATE 1')
				var dataStartTpl = moment().format('DD/MM/YYYY HH:mm:ss');
				app.service('templateService').post({
					url : '/template/' + templateId,
					params : {data: JSON.stringify(params || {})},
					error : function(err) {

						if (err.error && err.error.message) return reject(err.error.message)

						if (err.error) return reject(err.error)
						console.log('VEIO AQUI ERROR PROMISE REJECT TEMPLATE 2')
						reject(err || 'Ocorreu um erro no app.service Template!');
						
					},callback : function(result) {
						// console.log('Finalizado getTPL ' + templateId + ' no EFDB iniciado as ' + dataStartTpl + ' e finalizado as ' + moment().format('DD/MM/YYYY HH:mm:ss'))
						// if(templateId == '5c6334038af05df132340684'){ console.log(result.data) }
						// console.log(result.data)
						me.exec.query(result.data)
							.then(resolve).catch(function(e){
								console.log(e)
								console.log('VEIO AQUI ERROR PROMISE REJECT TEMPLATE 3')
								reject(e)
							})
						
					}
					
				});

			})
			
		},

		templatePuket : function(templateId, params, sendToQueue){

			if(sendToQueue) {

				return new Promise((resolve, reject) => {

					me.queue.push({templateId, params}, (err, results) => {
						if(err) return reject(err)

						resolve(results)
					})

				})

			}

			return new Promise((resolve, reject) => {
				console.log('VEIO AQUI ERROR PROMISE REJECT TEMPLATE 1')
				var dataStartTpl = moment().format('DD/MM/YYYY HH:mm:ss');
				app.service('templateService').post({
					url : '/template/' + templateId,
					params : {data: JSON.stringify(params || {})},
					error : function(err) {

						if (err.error && err.error.message) return reject(err.error.message)

						if (err.error) return reject(err.error)
						console.log('VEIO AQUI ERROR PROMISE REJECT TEMPLATE 2')
						reject(err || 'Ocorreu um erro no app.service Template!');
						
					},callback : function(result) {
						// console.log('Finalizado getTPL ' + templateId + ' no EFDB iniciado as ' + dataStartTpl + ' e finalizado as ' + moment().format('DD/MM/YYYY HH:mm:ss'))
						// if(templateId == '5c6334038af05df132340684'){ console.log(result.data) }
						// console.log(result.data)
						me.exec.queryPuket(result.data)
							.then(resolve).catch(function(e){
								console.log(e)
								console.log('VEIO AQUI ERROR PROMISE REJECT TEMPLATE 3')
								reject(e)
							})
						
					}
					
				});

			})
			
		},

		

	}

}