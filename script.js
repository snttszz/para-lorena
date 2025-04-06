function verificarData() {
  const dataInput = document.getElementById('data-input').value;
  const erro = document.getElementById('mensagem-erro');

  if (dataInput === '2008-10-01') {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-parabens').style.display = 'block';
  } else {
    erro.textContent = 'Data incorreta! Tente novamente.';
  }
}

function criarCoracao() {
  const coracao = document.createElement('span');
  coracao.classList.add('coracao');
  coracao.textContent = '💜';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.fontSize = Math.random() * 20 + 10 + 'px';
  document.getElementById('fundo-coracoes').appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

setInterval(criarCoracao, 300);
