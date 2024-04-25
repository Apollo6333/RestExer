
const apiUrl = 'https://viacep.com.br/ws/';

const formCep = document.getElementById('formCep');
const resultado = document.getElementById('resultado');

formCep.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const cep = document.getElementById('cep').value;
    
    const url = `${apiUrl}${cep}/json`;
    console.log(apiUrl + " DEPOIS DO LINK " + cep + " DEPOIS DO CEP " + "/json");
    console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                resultado.innerHTML = `
                <strong>Ibge:</strong> ${data.ibge}<br>
                <strong>Estado:</strong> ${data.estado}<br>
                <strong>Cidade:</strong> ${data.cidade}<br>
                <strong>Bairro:</strong> ${data.bairro}<br>
                <strong>Logradouro:</strong> ${data.logradouro}<br>
                `;
            } else {
                document.getElementById('resultado').innerHTML = 'CEP não encontrado.';
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
            resultado.innerHTML = 'Erro ao consultar o CEP.';
        });
});
