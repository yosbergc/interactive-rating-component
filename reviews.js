let starSelected;
let selectedContainer = document.querySelector('.selected')
let starsContainer = document.querySelectorAll('.star');
let submitButton = document.querySelector('.submit');
let finishContainer = document.querySelector('.thank-you')
let cardContainer = document.querySelector('.card')
submitButton.addEventListener('click', () => {
    if (starSelected != undefined) {
        cardContainer.classList.add('hide')
        finishContainer.classList.remove('hide')
        selectedContainer.innerHTML = `You selected ${starSelected} out of 5`

    } else {

    }
})
starsContainer.forEach((element, elementIndex) => {
    element.addEventListener('click', () => {
        changeColor(elementIndex)
    })
});

function changeColor(index) {
    for (element of starsContainer) {
        element.classList.remove('orange')
    }
    for (i = 0; i <= index; i++) {
        starsContainer[i].classList.add('orange')
    }
    starSelected = index + 1;
}