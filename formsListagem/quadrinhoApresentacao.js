$(document).ready(function(){

	$(".editarButton").click(function(){
		var id = $(this).attr('id');
		var quadrinhoApresentacao = $("#"+id);
		var nome = $(quadrinhoApresentacao).find('[name="nome"]').html();
		var numero = $(quadrinhoApresentacao).find('[name="numero"]').html();
		var data = $(quadrinhoApresentacao).find('[name="data"]').html();
		var editora = $(quadrinhoApresentacao).find('[name="editora"]').html();
		var licenciador = $(quadrinhoApresentacao).find('[name="licenciador"]').html();
		var categoria = $(quadrinhoApresentacao).find('[name="categoria"]').html();
		var genero = $(quadrinhoApresentacao).find('[name="genero"]').html();
		var num_paginas = $(quadrinhoApresentacao).find('[name="num_paginas"]').html();
		var status = $(quadrinhoApresentacao).find('[name="num_paginas"]').html();
		var formato = $(quadrinhoApresentacao).find('[name="formato"]').html();
		var preco = $(quadrinhoApresentacao).find('[name="preco"]').html();
		var capa = $(quadrinhoApresentacao).find('[name="capa"]').html();
		var descricao = $(quadrinhoApresentacao).find('[name="descricao"]').html();
		var editoraNome = $(quadrinhoApresentacao).find('[name="editoraNome"]').html();
		var licenciadorNome = $(quadrinhoApresentacao).find('[name="licenciadorNome"]').html();
		var categoriaNome = $(quadrinhoApresentacao).find('[name="categoriaNome"]').html();
		var generoNome = $(quadrinhoApresentacao).find('[name="generoNome"]').html();
		var statusNome = $(quadrinhoApresentacao).find('[name="num_paginasNome"]').html();
		var formatoNome = $(quadrinhoApresentacao).find('[name="formatoNome"]').html();
		var formatoDescricao = $(quadrinhoApresentacao).find('[name="formatoDescricao"]').html();
		$("#id").val(id);
		$("#nome").val("\""+nome+"\"");
		$("#numero").val("\""+numero+"\"");
		$("#data").val("\""+data+"\"");
		$("#editora").val("\""+editora+"\"");
		$("#licenciador").val("\""+licenciador+"\"");
		$("#categoria").val("\""+categoria+"\"");
		$("#genero").val("\""+genero+"\"");
		$("#status").val("\""+status+"\"");
		$("#num_paginas").val("\""+num_paginas+"\"");
		$("#formato").val("\""+formato+"\"");
		$("#preco").val("\""+preco+"\"");
		$("#capa").val("\""+capa+"\"");
		$("#descricao").val("\""+descricao+"\"");
		$("#editoraNome").val("\""+editoraNome+"\"");
		$("#licenciadorNome").val("\""+licenciadorNome+"\"");
		$("#categoriaNome").val("\""+categoriaNome+"\"");
		$("#generoNome").val("\""+generoNome+"\"");
		$("#statusNome").val("\""+statusNome+"\"");
		$("#formatoNome").val("\""+formatoNome+"\"");
		$("#formatoDescricao").val("\""+formatoDescricao+"\"");
		$("#quadrinhoApresentacaoForm").submit();
	});

	$(".novoButton").click(function(){
		$("#id").val(null);
		$("#nome").val(null);
		$("#numero").val(null);
		$("#data").val(null);
		$("#editora").val(null);
		$("#licenciador").val(null);
		$("#categoria").val(null);
		$("#genero").val(null);
		$("#status").val(null);
		$("#num_paginas").val(null);
		$("#formato").val(null);
		$("#preco").val(null);
		$("#capa").val(null);
		$("#descricao").val(null);
		$("#editoraNome").val(null);
		$("#licenciadorNome").val(null);
		$("#categoriaNome").val(null);
		$("#generoNome").val(null);
		$("#statusNome").val(null);
		$("#formatoNome").val(null);
		$("#formatoDescricao").val(null);
		$("#quadrinhoApresentacaoForm").submit();
	});

});