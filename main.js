'use strict'

import{pesquisarCachorro} from './dogapi.js'

const criarImg = (endImg) => {
    const img = document.createElement('img')
    img.src = endImg
    img.classList.add('image')
    return img
}

const carregarImagens = async () => {
    const raca = document.getElementById('raca').value
    const imagens = await pesquisarCachorro(raca)
    const galeria = document.getElementById('galeria')

    const tagImagens = imagens.map(criarImg)

    //Esses 3 pontos servem para espalahar o array, tipo: array[1], array[2], array[3], e assim por diante.
    galeria.replaceChildren(...tagImagens)
}

const handleKeypress = (event) => {
    if (event.key == 'Enter') {
        carregarImagens()
    }
}

document.getElementById('raca').addEventListener('keypress', handleKeypress)

