// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

var botaoRolar = document.getElementById('rolar');
var recipienteResultados = document.getElementById('recipienteResultados');
var resultado = document.getElementById('resultado');
var todasAsQtdes = [4,6,8,10,12,20];

botaoRolar.addEventListener('click', function(e) {
	console.clear();
	recipienteResultados.classList.remove('oculto');
	var idElement = 'quantidadeD';
	var somatorio = 0;
	var resultString = '';
	for (var i in todasAsQtdes) {
		var dadoDX = document.getElementById(idElement.concat(todasAsQtdes[i]));
		console.log('Quantidade'.concat(i));
		for (var j=0; j < dadoDX.value; j++){
			var resulAux = Math.ceil(Math.random() * todasAsQtdes[i]);
			resultString = resultString.concat(resulAux);
			resultString = resultString.concat(' ');
			resultString = resultString.concat('+');
			resultString = resultString.concat(' ');
			somatorio += resulAux;
		}
	}
	resultString = resultString.substring(0,(resultString.length-2));
	resultString = resultString.concat('= ');
	resultString = resultString.concat(somatorio);
	resultado.innerHTML = resultString;

});
