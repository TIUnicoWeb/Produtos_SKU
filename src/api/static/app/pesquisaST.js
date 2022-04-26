$( document ).ready(function() {
	var click = false;
	$( "body" ).delegate( "#btnSave", "click", function() {
		disableSave();
		click = true;
		saveForm();
		
	});
	
	var totalComment = 5000;
	
	function saveForm() {
		clearError();

		if(click){
			
			var data = validateForm();
			
			if (!data) {error('Preencha os campos obrigatórios.'); enableSave(); return false;}
			
			info('Salvando resposta...');
			
			if (data.resposta && data.resposta.length > totalComment) { {error('Texto muito grande para mensagem'); enableSave(); return false;} }
			
			//console.log(data); return false;
			disableSave();
	
			$.ajax({
				url: 'https://ms.imgnet.com.br/fusionASTEC/formularioPesquisa',
				method: "POST",
				data: data
			}).done(function(data) {
			   $('#gifLoadingNF').hide();
				
			   if (data && data.success) {
				   
				   success('Resposta enviada.');
				   
				   setTimeout(function() { window.location = 'https://sac.imaginarium.com.br'; },1500);
						   
			   } else {
				   if (data && data.msg){
					click = false;
					error(data.msg);
				   }else error('Servidor não retornou uma mensagem esperada');
			   }
	
	
			});
		}else{
			error('Por favor aguarde o processamento da sua resposta!.');
		}
		
		
	}
			
	function validateForm() {
		
		var data = {},
		isValid = true;
		
		$('#formNovo input,#formNovo textarea').each(function(index) { 
			
			var v = $(this).val();
							
			if (!v || v === '') {
				$(this).parent().toggleClass('has-error',true); 
				isValid = false;
			} else {
				
				$(this).parent().toggleClass('has-error',false);
				
				data[$(this).attr('name')] = $(this).val();
				
			}
						
		});
		
		if (isValid) return data;
		
		return false;
		
	}
	
	function disableSave() {  console.log('Veio aqui'); $('#btnSave').toggleClass('disabled',true);}
	function enableSave() {  $('#btnSave').toggleClass('disabled',false);}
	
	function error(msg) { $('#msgBox').html('<div class="alert alert-danger" role="alert"><b>Erro:</b><br><p>'+msg+'</p></div>'); }
	function info(msg) { $('#msgBox').html('<div class="alert alert-info" role="alert"><p>'+msg+'</p></div>'); }
	function success(msg) { $('#msgBox').html('<div class="alert alert-success" role="alert"><p>'+msg+'</p></div>'); }
	
	function clearError() { $('#msgBox').html(''); }
});