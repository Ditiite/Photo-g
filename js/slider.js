// Background image slider
const countries = [
    "images/countries/bangladesh.jpg",
    "images/countries/china.jpg",
    "images/countries/ethiopia.jpg",
    "images/countries/fin.jpg",
    "images/countries/finland.jpg",
    "images/countries/hong-kong.jpg",
    "images/countries/hungyry.jpg",
    "images/countries/india.jpg",
    "images/countries/iran.jpg",
    "images/countries/iraq.jpg",
    "images/countries/latvia.jpg",
    "images/countries/lv.jpg",
    "images/countries/morocco.jpg",
    "images/countries/nigeria.jpg",
    "images/countries/pakistan.jpg",
    "images/countries/serbia.jpg",
    "images/countries/nepal.jpg",
    "images/countries/slovakia.jpg",
    "images/countries/somalia.jpg",
    "images/countries/Vietnam.jpg"
];

changeBackground();
setInterval(changeBackground, 5000);

function changeBackground() {
    const mainImg = document.querySelector('.main-img');
    const randIdx = Math.floor(Math.random() * countries.length);
    const image = `url('${countries[randIdx]}')`;
    mainImg.style.background = `linear-gradient(-45deg, rgb(189, 90, 114),rgba(225, 196, 201, 0.3)), url('${countries[randIdx]}') no-repeat center`;
    mainImg.style.backgroundSize = 'cover';
}