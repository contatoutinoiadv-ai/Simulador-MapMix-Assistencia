const custoTela = document.getElementById('custoTela');
const custoBateria = document.getElementById('custoBateria');
const custoConector = document.getElementById('custoConector');

const precoTela = document.getElementById('precoTela');
const precoBateria = document.getElementById('precoBateria');
const precoConector = document.getElementById('precoConector');
const valorTotal = document.getElementById('valorTotal');

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function calcular() {
  // Tela: custo + 190%
  const custoTelaVal = parseFloat(custoTela.value) || 0;
  const vendaTela = custoTelaVal * 2.90;
  
  // Bateria: custo + 190%
  const custoBateriaVal = parseFloat(custoBateria.value) || 0;
  const vendaBateria = custoBateriaVal * 2.90;
  
  // Conector: custo + 200%
  const custoConectorVal = parseFloat(custoConector.value) || 0;
  const vendaConector = custoConectorVal * 3.00;
  
  // Atualizar displays
  precoTela.textContent = `R$ ${formatarMoeda(vendaTela)}`;
  precoBateria.textContent = `R$ ${formatarMoeda(vendaBateria)}`;
  precoConector.textContent = `R$ ${formatarMoeda(vendaConector)}`;
  
  // Total
  const total = vendaTela + vendaBateria + vendaConector;
  valorTotal.textContent = `R$ ${formatarMoeda(total)}`;
}

custoTela.addEventListener('input', calcular);
custoBateria.addEventListener('input', calcular);
custoConector.addEventListener('input', calcular);

calcular();