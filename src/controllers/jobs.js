var _ = require('underscore'),
moment = require('moment'),
CronJob = require('cron').CronJob,
async = require('async'),
path = require('path');

module.exports = {
	
	jobs: [],
	job: {},
	
	init: function(appPass, next) {
		
		app = appPass;
		me = this;
		//me.createJobs();	
		next();
		return this;
		
		
	},
	
	onReady: function() {
		var self = this;

		self.createJobs(function(){
			
			self.startJobs();			
		
		});
		
	},
	
	start: function() {},
	
	createJobs: function(cb) {
		me.log('[createjobs]');
		
		var self = this;
		
		this.jobs = require(path.resolve('jobs.js'));
		
		_.each(this.jobs,function(cmd) {
			
			if (app.controller[cmd.controller]) {
								
				if (typeof app.controller[cmd.controller][cmd.handler] === 'undefined') me.error('[createjobs] Nao foi encontrado handler "'+cmd.handler+'" em controller '+cmd.controller);
				else {
					
					self.createIndividualJob(cmd,app.controller[cmd.controller],app.controller[cmd.controller][cmd.handler]);
					
				}
			}
		});
		
		cb();
		
	},
	
	createIndividualJob: function(job,controller,handler) {
		
		if (!job.name) {me.error('[createIndividualJob] Faltando name para botJob');}
		if (!job.cron) {me.error('[createIndividualJob] Faltando cron para botJob');}
		
		//console.log('[createIndividualJob] Criando botJob ' + job.name);
		
		this.job[job.name] = new CronJob(job.cron, function() {
				
				// App.log('[job] Iniciando job: ' + job.name + ' ('+ job.cron+')');
			
				handler.apply(controller,[job.params || null]);
				
			}, function () {
				/* This function is executed when the job stops */
			},
			false /* Start the job right now */			
		);
		
	},
	
	startJobs: function() {
		me.log('[Jobs] Iniciando jobs');
		
		_.each(this.job,function(job) {
			
			job.start();
			
		});
		
	},
	
	stopJobs: function() {
	 me.log('[Jobs] Parando jobs');
		
		_.each(this.job,function(job) {
			
			job.stop();
			
		});
		
	}
	
}







