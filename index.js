const dados = document.getElementById("dados");

function pesquisacep(event) {
    event.preventDefault();

const urlAPI = 'https://viacep.com.br/ws/60764070/json/';

fetch(urlAPI)
  .then(response => {
    if (!response.ok) throw new Error('Erro na requisição');
    return response.json();
  })
  .then(data => {dados.innerHTML = `
    
    `})
  .catch(error => console.error('Erro:', error));
}