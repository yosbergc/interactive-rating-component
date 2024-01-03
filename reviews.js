let starSelected;
let starsContainer = document.querySelectorAll('.star');
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