let feedProdutos = document.getElementById('stored-items')
function createCards(itemsDataBase) {
    for (let i = 0; i < itemsDataBase.length; i++) {
        let card = document.createElement('li')
        let cardImgBox = document.createElement('div')
        let cardImg = document.createElement('img')
        let cardDescriptionBox = document.createElement('div')
        let cardCategory = document.createElement('h4')
        let cardName = document.createElement('h3')
        let cardDescription = document.createElement('p')
        let cardPrice = document.createElement('p')
        let cardButton = document.createElement('button')

        card.classList.add('product-card')
        cardImgBox.classList.add('card-image-box')
        cardImg.classList.add('card-image')
        cardDescriptionBox.classList.add('card-description')
        cardButton.classList.add('card-add-kart')

        card.id = itemsDataBase[i].id
        cardImg.src = itemsDataBase[i].img
        cardCategory.innerText = itemsDataBase[i].tag[0]
        cardName.innerText = itemsDataBase[i].nameItem
        cardDescription.innerText = itemsDataBase[i].description
        cardPrice.innerText = `R$ ${itemsDataBase[i].value}`
        cardButton.innerText = "Adicionar ao carrinho"

        feedProdutos.append(card)
        card.append(cardImgBox, cardDescriptionBox)
        cardImgBox.append(cardImg)
        cardDescriptionBox.append(cardCategory, cardName, cardDescription, cardPrice, cardButton)
    }
}
createCards(data)
// --------------------------------------------------------------------------
let feedKart = document.getElementsByClassName('inside-kart-items')
let buttonAddKart = document.getElementsByClassName('card-add-kart')
for (let i = 0; i < buttonAddKart.length; i++) {
    let buttonAdd = buttonAddKart[i]
    buttonAdd.addEventListener('click', kartPosition)
}

function kartPosition(buttonPressed) {
    let button = event.target
    let targetLi = button.parentElement.parentElement
    let i = parseInt(targetLi.id)
    let iAdd = i - 1
    let itemToAdd = data[iAdd]
    createAddedCard(itemToAdd)
}

function createAddedCard(addedItem) {
    let kartCard = document.createElement('li')
    let kartImgBox = document.createElement('div')
    let kartImg = document.createElement('img')
    let kartDescriptionBox = document.createElement('div')
    let kartCardName = document.createElement('h3')
    let kartCardPrice = document.createElement('p')
    let kartRemoveButton = document.createElement('button')

    kartCard.classList.add('kart-item-card')
    kartImgBox.classList.add('kart-item-img-box')
    kartImg.classList.add('kart-item-img')
    kartDescriptionBox.classList.add('kart-item-description')
    kartCardName.classList.add('kart-item-name')
    kartCardPrice.classList.add('kart-item-price')
    kartRemoveButton.classList.add('kart-item-remove')


    kartImg.src = addedItem.img
    kartCardName.innerText = addedItem.nameItem
    kartCardPrice.innerText = `R$ ${addedItem.value}`
    kartRemoveButton.innerText = "Remover produto"


    feedKart[0].append(kartCard)
    kartCard.append(kartImgBox, kartDescriptionBox)
    kartImgBox.append(kartImg)
    kartDescriptionBox.append(kartCardName, kartCardPrice, kartRemoveButton)
}
// -----------------------------------------------------------------------

let removeKartBtn = document.getElementsByClassName('kart-item-remove')
for(let r = 0; r < removeKartBtn.length; r++){
    let buttonRemove = removeKartBtn[i]
    buttonRemove.addEventListener('click', kartPositionRemove)
}
console.log()

function kartPositionRemove(itemSelect){
    let buttonRemove = event.target
    let targetItemRem = button.parentElement.parentElement
    let indexItemKart = parseInt(targetItemRem)
    let iRemove = indexItemKart - 1
    let itemToRemove 
}