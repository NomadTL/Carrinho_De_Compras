let totalGeral = 0;
limpar();

function adicionar() {
  const selectProduto = document.getElementById('produto');
  const opcaoSelecionada = selectProduto.options[selectProduto.selectedIndex];

  const nomeProduto = opcaoSelecionada.textContent.split('-')[0].trim(); // só o nome antes do hífen
  const valorUnitario = parseFloat(opcaoSelecionada.getAttribute('data-preco')); // pega o preço do data-preco

  const quantidade = parseInt(document.getElementById('quantidade').value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Digite uma quantidade válida');
    return;
  }

  const preco = quantidade * valorUnitario;

  const carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;

  totalGeral += preco;

  const campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral.toFixed(2)}`;

  document.getElementById('quantidade').value = 1;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0.00';
  document.getElementById('quantidade').value = 1;
}
