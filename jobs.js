 module.exports = [
//Exemplo objeto JOB
	 {
	name: 'jobSincronizaPrecosProdutosNoMagento',
	help: 'Transforma o payload vindo da neoAssist e salva na tabela de protocolo e gera o cadastro do cliente no Linx!',
	cron: '0 */8 * * * *',
	controller: 'frontend',
	handler: 'sincronizarPrecosDeProdutosNoMagento'
}
];
