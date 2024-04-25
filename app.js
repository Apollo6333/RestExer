//Nesta linha é onde se encontra a url do serviço chamado
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

//O parametro usado pelo programa é o CEP
//O serviço retorna com um Json, de onde se divide as informações para ficar legivel ao usuario
//O serviço usado é o cep lookup, pode ser usado para autopreenchimento de um site, ou para calcular frete, no caso de empresas online
