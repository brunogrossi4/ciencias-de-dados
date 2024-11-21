const url = 'https://raw.githubusercontent.com/Raymarques20/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-dados-globais%20(1).json'

async function visualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = res.json()
  const praticamRegularmente = (dados.total_pessoas_que_praticam_esportes_regularmente) / 1e9
  const pessoaNoMundo = (dados.total_pessoas_no_mundo) / 1e9
  const horas = parseInt(dados.tempo_medio)
  const minutos = Math.round(( dados.tempo-medio -horas) *100)
  const porcentagemConectada = ((praticamRegularmente  /  pessoaNoMundo) * 100).toFixed(2)
  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoaNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${praticamRegularmente} bilhões </span> estão conectadas em alguma rede social e passam em média <span>${horas} </span> horas e <span>${minutos}</span> minutos-conectadas.
  <br> Isso significa que aproximadamente ${porcentagemConectada} de pessoas que praticam regularmente algum esporte SpeechRecognitionAlternative.`
  
  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}

visualizarInformacoesGlobais();