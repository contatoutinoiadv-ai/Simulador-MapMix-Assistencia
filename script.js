const custoTela    = document.getElementById('custoTela');
const custoBateria = document.getElementById('custoBateria');
const telaAvista   = document.getElementById('telaAvista');
const telaPrazo    = document.getElementById('telaPrazo');
const precoBateria = document.getElementById('precoBateria');
const valorTotal   = document.getElementById('valorTotal');

function fmt(v) {
  return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcular() {
  const tela    = parseFloat(custoTela.value)    || 0;
  const bateria = parseFloat(custoBateria.value) || 0;

  const vendaTelaAvista = tela * 2.68;
  const vendaTelaPrazo  = tela * 2.80;
  const vendaBateria    = bateria * 2.90;

  telaAvista.textContent   = fmt(vendaTelaAvista);
  telaPrazo.textContent    = fmt(vendaTelaPrazo);
  precoBateria.textContent = fmt(vendaBateria);

  const total = vendaTelaAvista + vendaBateria;
  valorTotal.textContent = fmt(total);
}

document.getElementById('dataOrcamento').addEventListener('input', function(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 8);
  if (v.length >= 5) v = v.slice(0,2) + '/' + v.slice(2,4) + '/' + v.slice(4);
  else if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
  e.target.value = v;
});

custoTela.addEventListener('input', calcular);
custoBateria.addEventListener('input', calcular);
calcular();
