const inputCep = document.getElementById('cep');
const validaCep = document.getElementById('btt');

validaCep.addEventListener('click', async() => {
    const dadosEndereco = await consutaCep(inputCep.value);
    console.log('dadosEndereco', dadosEndereco);
    preencheEndereco(dadosEndereco);
});

inputCep.addEventListener('blur', async() => {
    const dadosEndereco = await consutaCep(inputCep.value);
    console.log('dadosEndereco', dadosEndereco);
    preencheEndereco(dadosEndereco);
});

async function consutaCep(cep) {
    try {
        const retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dadosEndereco = await retorno.json();
        return dadosEndereco;
    } catch (e) {
        console.error('erro :', e);
        msg;
        const divMsg = document.querySelector('#msg');
        divMsg.textContent = 'CEP Inválido!';
        divMsg.style.display = 'block';
    }
}

function preencheEndereco(dadosEndereco) {
    const inputLogradouro = document.getElementById('logradouro');
    const inputBairro = document.getElementById('bairro');
    const inputCidade = document.getElementById('cidade');
    const inputUF = document.getElementById('estado');

    inputLogradouro.value = dadosEndereco.logradouro;
    inputBairro.value = dadosEndereco.bairro;
    inputCidade.value = dadosEndereco.localidade;
    inputUF.value = dadosEndereco.uf;
}