'use strict'

//Cria uma função para 
const pesquisarCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca.toLowerCase()}/images`

    //Cria uma função response para fazer uma requisição na url
    const response = await fetch(url)

    const listaCachorro = await response.json()

    return listaCachorro.message
}

export{
    pesquisarCachorro
}