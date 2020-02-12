// Armazena as palavras disponveis.
const palavras = [ 'coisa', 'casa', 'tempo', 'ano', 'dia', 'vez',
'homem', 'senhor', 'senhora', 'moço','moça']

// Seleciona uma palavra aleatoriamente.
const palavra = palavras[Math.floor(Math.random() * palavras.length)]

// Inicializa a sombra e a letra.
var sombra = []
var letra = ""
var contador_vitoria = 0
var contador_vidas = 5

// Adiciona "_" para cada letra da palavra.
const gera_sombra = ( palavra, sombra ) => {
    for (i = 0; i < palavra.length; i++){
        sombra[i] = "_"
    }
}

gera_sombra( palavra, sombra )

// Instancia o botão.
const $jogar = document.getElementById( 'jogar' )

// Função que invoca as funções do jogo.
const jogar = () => {
    checaVitoria( contador_vitoria )
    letra = prompt( sombra )
    checaLetra( palavra, sombra, letra, contador_vitoria, contador_vidas )
    jogar()
}

// Adiciona uma escuta ao botão.
$jogar.addEventListener( 'click', jogar )

console.log( palavra )
console.log( sombra )

// var letra = document.getElementById( 'caixa_de_letras' ).value

// Tenta substituir o "_" na sombra para a letra correspondente.
const checaLetra = ( palavra, sombra, letra, contador_vitoria, contador_vidas ) => {
    const checa_acerto = contador_vitoria
    for ( i=0; i<palavra.length; i++ ){
        if ( palavra.charAt( i ) == letra ){
            sombra[i] = letra
            contador_vitoria ++
        }
    }
    if ( checa_acerto == contador_vitoria ){
        descontaVida( contador_vidas )
        prompt( "Restam " + contador_vidas + " vidas." )
    }
}

const checaVitoria = ( contador_vitoria ) => {
    if ( contador_vitoria == palavra.length ){
        prompt( "V I T Ó R I A" )
    }
}

const descontaVida = ( contador_vidas ) => {
    contador_vidas = contador_vidas - 1

    if( contador_vidas <= 0 ){
        prompt( "Você perdeu!" )
    }
}