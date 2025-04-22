const form = document.getElementById('gasto-form');
const lista = document.getElementById('lista-gastos');
const totalSpan = document.getElementById('total');

let gastos = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categoria').value;
