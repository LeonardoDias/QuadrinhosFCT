
<script src="../js/jquery-3.1.0.min.js"></script>
<script src="licenciador.js"></script>

<p id="resultadoForm"></p>
<form id="licenciadorForm">

<?php 

$nome = null;
$site = null;
$id = null;

if(isset($_POST["id"])){
	$nome = $_POST["nome"]; 
	$site = $_POST["site"];
	$id = $_POST["id"];
} 
echo '<input type="hidden" id="idHidden" name="idHidden" value="'.$id.'"></p>';
echo '<p id="nomeLabel"> Nome: <input type="text" id="nomeTxt" name="nomeTxt" value='.$nome.'> </p>';
echo '<p id="siteLabel"> Site: <input type="text" id="siteTxt" name="siteTxt" value='.$site.'> </p>';

if($id != null){
	echo '<input type="button" id="atualizarButton" name="atualizarButton" value="Atualizar"/>';
	echo '<input type="button" id="excluirButton" name="excluirButton" value="Excluir"/>';
}
else {
	echo '<input type="button" id="cadastrarButton" name="cadastrarButton" value="Cadastrar"/>';
}

echo '<a href="/web/QuadrinhosFCT/formsListagem/licenciador.php"><input type="button" value="Voltar"/></a>';
?>

</form>