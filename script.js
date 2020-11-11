// Elements
let $imageContainer = document.getElementById('image-container')
let $nextButton = document.getElementById('next-button')
let $previousButton = document.getElementById('previous-button')
let $overlay = document.getElementById('overlay')

// Data
const imageNames = ["imageA", "imageB", "imageC", "imageD", "imageE", "imageF", "imageG"]
let currentImage = 0

// Functions
function clickImage(event) {
    if (event.target.getAttribute('id') === 'next-button') {
        currentImage++
        $imageContainer.innerHTML = `<img src='${imageNames[currentImage]}.jpg' width='100%'>`
    } else if (event.target.getAttribute('id') === 'previous-button') {
        currentImage--
        $imageContainer.innerHTML = `<img src='${imageNames[currentImage]}.jpg' width='100%'>`
    }
    else if (event.target.parentElement.getAttribute('id') === 'image-container') {
            $overlay.innerHTML = `<img src='${imageNames[currentImage]}.jpg' width='100%'>`
        $overlay.style.display = 'block'
    }
    else if (event.target.parentElement.getAttribute('id') === 'overlay') {
            $overlay.style.display = 'none'
    }
}

function keyImage(event) {
    if (event.keyCode === 39) {
        currentImage++
        $imageContainer.innerHTML = `<img src='${imageNames[currentImage]}.jpg' width='100%'>`
    } else if (event.keyCode === 37) {
        currentImage--
        $imageContainer.innerHTML = `<img src='${imageNames[currentImage]}.jpg' width='100%'>`
    }
}

// Events
let $container = document.getElementById('all-container')
$container.addEventListener('click', clickImage)
document.addEventListener('keydown', keyImage)