$( document ).ready(function() {

    $(".btnImg").click(function(){
        $("button").addClass("active");
        $(".rest").addClass("active");
        $(".icon").addClass("active");
    });
	
	$( "body" ).delegate( ".aprovar", "click", function() {
		saveForm(true, localStorage.getItem('protocolo'));
    });
    
    $( "body" ).delegate( ".reprovar", "click", function() {
		saveForm(false, localStorage.getItem('protocolo'));
	});
	
	var totalComment = 5000;
	
	function saveForm(aprovado, protocolo) {
		
		clearError();
		
		var data = {
			aprovado,
			protocolo
		};
		
		// if (!data) {error('Preencha os campos obrigatórios.'); enableSave(); return false;}
		
		info('Salvando resposta...');
		
		// if (data.resposta && data.resposta.length > totalComment) { {error('Texto muito grande para mensagem'); enableSave(); return false;} }
		
		//console.log(data); return false;
		


		$.ajax({
            url: 'https://ms.imgnet.com.br/api.neoAssist/api/sac/astec/orcamento/aprovacao/save/'+ aprovado,
            method: "POST",
            data: data
        }).done(function(data) {
			
		   if (data && data.success) {
			   
			   success('Resposta enviada.');
			   
			   setTimeout(function() { location.reload(); },1500);
					   
		   } else {
			   if (data && data.msg) error(data.msg);
			   else error('Servidor não retornou uma mensagem esperada');
		   }


        });
		
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
	
	function disableSave() {  $('#btnSave').toggleClass('disabled',true);}
	function enableSave() {  $('#btnSave').toggleClass('disabled',false);}
	
	function error(msg) { $('#msgBox').html('<div class="alert alert-danger" role="alert"><b>Erro:</b><br><p>'+msg+'</p></div>'); }
	function info(msg) { $('#msgBox').html('<div class="alert alert-info" role="alert"><p>'+msg+'</p></div>'); }
	function success(msg) { $('#msgBox').html('<div class="alert alert-success" role="alert"><p>'+msg+'</p></div>'); }
	
	function clearError() { $('#msgBox').html(''); }
});