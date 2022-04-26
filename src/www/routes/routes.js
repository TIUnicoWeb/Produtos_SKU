module.exports = [{
	route: '/integrarTodosOsProdutos',
	methods: [{
		type: 'get',
		controller: 'frontend',
		handler: 'sincronizarPrecosDeProdutosNoMagento'
    }]
}];