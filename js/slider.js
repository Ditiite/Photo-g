// Background image slider
const countries = [
    "images/countries/bangladesh.jpg",
    "images/countries/bangladesh1.jpg",
    "images/countries/china.jpg",
    "images/countries/egypt.jpg",
    "images/countries/ethiopia.jpg",
    "images/countries/fin.jpg",
    "images/countries/fin1.jpg",
    "images/countries/fin2.jpg",
    "images/countries/fin3.jpg",
    "images/countries/fin4.jpg",
    "images/countries/hong-kong.jpg",
    "images/countries/hong-kong1.jpg",
    "images/countries/hungary.jpg",
    "images/countries/india.jpg",
    "images/countries/iran1.jpg",
    "images/countries/iran2.jpg",
    "images/countries/iran3.jpg",
    "images/countries/iraq.jpg",
    "images/countries/latvia.jpg",
    "images/countries/lv.jpg",
    "images/countries/lv1.jpg",
    "images/countries/lv2.jpg",
    "images/countries/morocco1.jpg",
    "images/countries/morocco.jpg",
    "images/countries/nigeria.jpg",
    "images/countries/nigeria1.jpg",
    "images/countries/pakistan.jpg",
    "images/countries/serbia.jpg",
    "images/countries/serbia1.jpg",
    "images/countries/nepal.jpg",
    "images/countries/nepal1.jpg",
    "images/countries/nepal2.jpg",
    "images/countries/slovakia.jpg",
    "images/countries/somalia.jpg",
    "images/countries/somalia1.jpg",
    "images/countries/vietnam.jpg",
    "images/countries/vietnam1.jpg",
    "images/countries/vietnam2.jpg",
    "images/countries/vietnam3.jpg",
];

changeBackground();
setInterval(changeBackground, 5000);

function changeBackground() {
    const mainImg = document.querySelector('.main-img');
    const randIdx = Math.floor(Math.random() * countries.length);
    
    const image = `url('${countries[randIdx]}')`;
    mainImg.style.background = `url('${countries[randIdx]}') no-repeat center`;
    mainImg.style.backgroundSize = 'cover';
}

// Main bg img on load of the page comes from top to down.
window.onload = function () {
    var ball = document.querySelector('.main-img')
    ball.style.marginTop = "0";
};
