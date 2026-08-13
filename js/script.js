/* ==========================================================================
   BOTÃO "VOLTAR AO TOPO"
   Todo o botão é criado por aqui, em JavaScript puro.
   Ele não existe em nenhum momento escrito diretamente no HTML.
   ========================================================================== */

// Quantidade de pixels que o usuário precisa rolar para o botão aparecer
const LIMITE_PARA_MOSTRAR = 400;

// 1) Cria o elemento <button> do zero
const botaoTopo = document.createElement('button');

// 2) Define o símbolo exibido dentro do botão (seta para cima)
botaoTopo.textContent = '↑';

// 3) Adiciona a classe usada pelo CSS para estilizar o botão
botaoTopo.classList.add('btn-topo');

// 4) Acessibilidade: descreve a função do botão para leitores de tela
botaoTopo.setAttribute('aria-label', 'Voltar ao topo da página');
botaoTopo.setAttribute('title', 'Voltar ao topo');

// 5) Insere o botão pronto no final do <body>
document.body.appendChild(botaoTopo);

// 6) Mostra o botão apenas depois que a página rolar uma certa distância,
//    e o esconde novamente quando o usuário estiver perto do topo
window.addEventListener('scroll', () => {
  if (window.scrollY > LIMITE_PARA_MOSTRAR) {
    botaoTopo.classList.add('visivel');
  } else {
    botaoTopo.classList.remove('visivel');
  }
});

// 7) Ao clicar no botão, a página rola suavemente até o topo
botaoTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* ==========================================================================
   PEQUENO EXTRA: ano atual no rodapé
   Preenche automaticamente o ano no rodapé, sem precisar atualizar o HTML
   todo ano.
   ========================================================================== */
const spanAnoAtual = document.getElementById('ano-atual');

if (spanAnoAtual) {
  const anoDeHoje = new Date().getFullYear();
  spanAnoAtual.textContent = anoDeHoje;
}
