const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const corProduto = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');
const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-Inverno',
    pasta:'imagens-azul-inverno',
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta:'imagens-meia-noite',
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

// Criando um Array, lista
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41mm', '45mm']
// meiaNoite.pasta  para acessar um objeto
const titulo = document.getElementById('')

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id; 
    // busca uma imagem que tem esse valor e está checked e resgata o id dele
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    // Pegando o primeiro caracter do texto do id e salvando na variável imagemSelecionada
    imagemVisualizacao.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho(){
    //atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    // mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado]
    // Quero mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41mm') {
        imagemVisualizacao.classList.add('caixa-pequena'); 
        //estou falando pro JS adicionar a classe pequena
    }
    else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocaCor(){
    // atualizar cor selecionada
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    // busca a imagem da cor que tem esse valor onde está checked e resgata o id dele
    corSelecionada = idCorSelecionada.charAt(0);
    // trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado]
    // trocar titulo da cor
    corProduto.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome
    // trocar as imagens das miniaturas exibidas de acordo com a cor
    miniaturaImagem0.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-0.jpeg'
    miniaturaImagem1.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-1.jpeg'
    miniaturaImagem2.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-2.jpeg'
    // trocar a imagem de visualização
    
    imagemVisualizacao.src = './imagens/opcoes-cores/'+opcoesCores[corSelecionada].pasta+'/imagem-' + imagemSelecionada + '.jpeg'
}