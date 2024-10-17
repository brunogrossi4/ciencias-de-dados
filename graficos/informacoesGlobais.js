const url https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-glabaison

async function visualizarInformacoesGlobais() {
  const res await fetch(url)
  const dados = res.json()
  const paragrafo document.createElement('p') paragrafo.classList.add('graficos-container texto')
  paragrafo.innerHTML = Você sabia que o mundo tem
  $(dados.total_pessoas_mundo) de pessoas e que aproximadamente
  $(dados.total_pessoas_conectadas) estão conectadas em alguma rede social e passan en sétia $(dados.tempo medio) horas conectadas.
  const containder = document.getElementById('graficos-container")
  containder.appendChild(paragrafo)

}

visualizarInformacoesGlobais();