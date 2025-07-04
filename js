function calcular() {
  const valor = parseFloat(document.getElementById("valor").value);
  const taxa = parseFloat(document.getElementById("taxa").value);

  if (isNaN(valor) || isNaN(taxa)) {
    document.getElementById("resultado").innerText = "Por favor, preencha todos os campos.";
    return;
  }

  const rendimento = valor * (taxa / 100);
  const total = valor + rendimento;

  document.getElementById("resultado").innerHTML = `
    📊 Rendimento: R$ ${rendimento.toFixed(2)}<br>
    💰 Total após 1 mês: R$ ${total.toFixed(2)}
  `;
}
