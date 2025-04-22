const form = document.getElementById('gasto-form');
const lista = document.getElementById('lista-gastos');
const totalSpan = document.getElementById('total');

let gastos = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categoria').value;

  if (descricao && !isNaN(valor) && categoria) {
    gastos.push({ descricao, valor, categoria });
    atualizarLista();
    form.reset();
  }
});
function atualizarLista() {
    lista.innerHTML = '';
    let total = 0;
  
    gastos.forEach((gasto, index) => {
      total += gasto.valor;
  
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${gasto.descricao} - 
          R$ <span class="${gasto.valor > 100 ? 'vermelho' : ''}">
          ${gasto.valor.toFixed(2)}</span> 
          [${gasto.categoria}]
        </span>
       