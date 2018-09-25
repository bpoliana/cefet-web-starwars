// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

$(document).ready(() => {
  let episode = localStorage.getItem('episode');
  if(episode)
    setIntro(episode);
});

const id2episode = id => {
  let episodes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  return episodes[parseInt(id)];
}

const setIntro = text => {
  localStorage.setItem('episode', text);
  $('.reading-animation').html(text);
}

$.ajax({
  url: 'url-da-requisicao',
  dataType: 'json',
  success: function(resposta) {
    // escreve a resposta no console (para ver o que foi recebido)
    console.log(resposta);
    // faz o que quiser fazer com a resposta...
    // ...
  }
});


$('#movies').
