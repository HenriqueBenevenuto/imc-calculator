function calcularIMC() {
  // Captura os valores dos inputs
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Verifica se os valores são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  // Calcula o IMC
  const imc = peso / (altura * altura);

  // Exibe o resultado do IMC
  document.getElementById("resultadoIMC").textContent = `Seu IMC é: ${imc.toFixed(2)}`;

  // Determina a classificação do IMC
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3 (mórbida)";
  }

  // Exibe a classificação
  document.getElementById("classificacaoIMC").textContent = `Classificação: ${classificacao}`;
}
