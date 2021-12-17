// =======================================================================================
// addEventListener

const prj1 = document.getElementById('prj1');
const prj2 = document.getElementById('prj2');
const prj3 = document.getElementById('prj3');
const myWebpage = document.getElementById('mySpotrybefy');

// 1- Função que adiciona a classe 'tech' ao elemento selecionado.
//  - Deve existir apenas um elemento com a classe 'tech'.
function changeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');

}
prj1.addEventListener('click',changeTech);
prj2.addEventListener('click',changeTech);
prj3.addEventListener('click',changeTech);

//  2- Função que, ao clicar duas vezes nos projetos, ele redireciona para o repositório do mesmo.
function pageRedirect(event) {

  if(event.target.id === 'prj1') {
    window.location.replace('https://wesley-maia.github.io/paradise-hotel-react/')
  }

  if(event.target.id === 'prj2') {
    window.location.replace('https://github.com/Wesley-Maia/trybe-exercises')
  }

  if(event.target.id === 'prj3') {
    window.location.replace('https://github.com/Wesley-Maia/trybe-exercises')
  }
}
prj1.addEventListener('dblclick',pageRedirect);
prj2.addEventListener('dblclick',pageRedirect);
prj3.addEventListener('dblclick',pageRedirect);
