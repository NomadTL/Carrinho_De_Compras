let totalGeral = 0;
limpar();

function adicionar() {
  const selectProduto = document.getElementById('produto');
  const opcaoSelecionada = selectProduto.options[selectProduto.selectedIndex];

  const nomeProduto = opcaoSelecionada.textContent.split('-')[0].trim();
  const valorUnitario = parseFloat(opcaoSelecionada.getAttribute('data-preco'));

  const quantidadeInput = document.getElementById('quantidade');
  const quantidade = parseInt(quantidadeInput.value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Digite uma quantidade válida');
    return;
  }

  const preco = quantidade * valorUnitario;

  const carrinho = document.getElementById('lista-produtos');

  const produtoSection = document.createElement('section');
  produtoSection.className = 'carrinho__produtos__produto';

  produtoSection.innerHTML = `
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
  `;

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = '-';
  botaoRemover.className = 'botao-remover';
  botaoRemover.setAttribute('aria-label', `Remover ${nomeProduto} do carrinho`);

  produtoSection.appendChild(botaoRemover);
  carrinho.appendChild(produtoSection);

  totalGeral += preco;
  atualizarTotal();

  quantidadeInput.value = 1;

  botaoRemover.addEventListener('click', () => {
    carrinho.removeChild(produtoSection);
    totalGeral -= preco;
    atualizarTotal();
  });
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  atualizarTotal();
  document.getElementById('quantidade').value = 1;
}

function atualizarTotal() {
  const campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral.toFixed(2)}`;
}
