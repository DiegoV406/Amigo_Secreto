//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []
const lista = document.querySelector('#listaAmigos')
const resultado = document.querySelector('#resultado')
const nome = document.querySelector('#amigo')

function adicionarAmigo() {
  if (nome.value.trim().length <= 0) {
    alert('Digite um nome valido no campo!');
    return;
  }
  if(amigos.includes(nome.value)) {
     alert("Esse nome ja foi adicionado");
     document.querySelector("input").value = "";
     return;
  }
  else{
    amigos.push(nome.value);
  }

  listarAmigos();
  document.querySelector("input").value = "";
}


function listarAmigos() {
  lista.innerHTML = ''
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    let amigo = document.createTextNode(amigos[i]);
    item.appendChild(amigo);
    lista.appendChild(item);
  }
}


function sortearAmigo() {
  if (amigos.length <= 0) {
    alert('Adicione seus amigos para poder sortear!');
    return;
  }

  let numero = Math.floor(Math.random() * amigos.length);
  let amigosSorteado = amigos[numero];
  resultado.innerHTML = '';
  resultado.innerHTML = `<li>O amigo sorteado foi : ${amigosSorteado}</li>`;
}