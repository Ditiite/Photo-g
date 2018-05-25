function renderPerson(person) {
    let containerEl = document.querySelector('.person');
    containerEl.innerHTML = createPersonHtml(person);
   
    console.log(person.curPersonIdx);
    collapse();
}

function renderCarousel(persons) {
    let containerEl = document.querySelector('.person');

    let html = '';

    persons.forEach(person => {
        html += createPersonHtml(person);
    });
    return html;
}

function createPersonHtml(person) {
    const html = `
        <div class="person-img-container">
            <img class="person-img" src="images/${person.src}" alt="${person.alt}"/>
            <p class="full-name">${person.firstName} ${person.lastName}</p>
            
            <button onclick="renderNextPerson()">Next</button>
        </div>
        <button class="collapse">...</button>
        <section class="person-details">
            <p class="title"> Title: ${person.title}</p>
            <p class="nationality"> Nationality: ${person.nationality}</p>
            <p class="skills"> Skills </p><i class="fas fa-caret-down"></i>
                <ul class="skill-list"> 
                    <li>${person.skills}</li>
                </ul>
            
            <p class="why-softwear"> Why Softwear Developer: ${person.whySofterDeveloper}</p>
            <p class="vision"> Long Term Vision: ${person.longTermVision}</p>
            <p class="motivation"> What Motivate Me:${person.motivatesMe}</p>
            <p class="quote"> Favorite Quote:${person.favoriteQuote}</p>
            <p class=""> Joined:${person.joinedOn}</p>
        </section>
    `;

    return html;
    
}


//Carousel
function renderCarousel(persons) {
    let containerEl = document.querySelector('.carousel');

    let html = '';

    persons.forEach(person => {
        html += createCarouselHtml(person);
    });

    containerEl.innerHTML = html;
}
function createCarouselHtml(person) {
    const html = `
        <div>
            <img class="person-img" src="images/${person.src}" alt="${person.alt}"/> 
        </div>
    `;

    return html;
}
//print skils 

let skills = '';
function skill() {
    for (let i = 0; i <photosInfo.skill.length; i++) {
        
    }
}


let curPersonIdx = 0;
// show default 1st person
renderPerson(photosInfo[curPersonIdx]);
renderManyPersons(photosInfo);

function renderNextPerson() {
    curPersonIdx += 1;
    const person = photosInfo[curPersonIdx];

    
    renderPerson(person);
    if(curPersonIdx === photosInfo.length-1) {
        return curPersonIdx = -1;
    }
}

// Collapse for info section
function collapse() {
    // console.log(document.querySelectorAll('.collapse'))
    document.querySelectorAll('.collapse').forEach(e => {
        // debugger;
         console.log(e.parentNode.children[0].children[0])
        e.addEventListener('click', function () {
            this.parentElement.querySelector('.person-details').classList.toggle('hidden');
        });
    });

    document.querySelectorAll('.fa-caret-down').forEach(e => {
        e.addEventListener('click', function () {
            this.parentElement.querySelector('.skill-list').classList.toggle('hidden');
        });
    });
}
