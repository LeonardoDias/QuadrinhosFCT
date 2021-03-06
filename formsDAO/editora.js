$(document).ready(function(){

	$('#excluirButton').click(function(){
		
		$.ajax({
		type: "POST",
		url: "excluirEditora.php",
		datatype:"html",
		data:{
			"dadosForm": $("#editoraForm").serialize()},
		success: function(resposta){
			$("#resultadoForm").empty();
			$("#resultadoForm").append(resposta);
			$("#resultadoForm").css("color","#00FF00");
			$("#resultadoForm").fadeIn(1000);
			setTimeout(function() {$("#editoraForm").submit()}, 1000)},
		error: function (request, status, errorThrown) {
			alert(request+","+status+","+errorThrown);}
		});
	});

	$('#atualizarButton').click(function(){

		if($("#nomeTxt").val() != ""){

			$.ajax({
			type: "POST",
			url: "atualizarEditora.php",
			datatype:"html",
			data:{
				"dadosForm": $("#editoraForm").serialize()},
			success: function(resposta){
				$("#resultadoForm").empty();
				$("#resultadoForm").append(resposta);
				$("#resultadoForm").css("color","#00FF00");
				$("#resultadoForm").fadeIn(1000);
				setTimeout(function() {$("#editoraForm").submit()}, 1000)},
			error: function (request, status, errorThrown) {
				alert(request+","+status+","+errorThrown);}
			});


		}
	});

	$('#cadastrarButton').click(function(){

		if($("#nomeTxt").val() != ""){

			$.ajax({
			type: "POST",
			url: "inserirEditora.php",
			datatype:"html",
			data:{
				"dadosForm": $("#editoraForm").serialize()},
			success: function(resposta){
				$("#resultadoForm").empty();
				$("#resultadoForm").append(resposta);
				$("#resultadoForm").css("color","#00FF00");
				$("#resultadoForm").fadeIn(1000);
				setTimeout(function() {$("#editoraForm").submit()}, 1000)},
			error: function (request, status, errorThrown) {
				alert(request+","+status+","+errorThrown);}
			});


		}

	});

});