
function renderPerson(person) {
    let containerEl = document.querySelector('.person');
    containerEl.innerHTML = createPersonHtml(person);
    //console.log(person.curPersonIdx);
}

function createPersonHtml(person) {
    let html = `
        <div class="persons-img-container">
            <img class="persons-img" src="images/${person.src}" alt="${person.alt}" />
            <div class="persons-img-buttons">
                <p class="persons-name">${person.firstName} ${person.lastName}</p>
                <button class="prev-person" onclick="renderPrevPerson()"><</button>
                <button class="toggle-info">...</button>
                <button class="next-person"  onclick="renderNextPerson()">></button>
            </div>
        </div>
        <div class="info-cont hidden">
            <div class="persons-info-container">

                <p class="right">Title: </p>
                <p class="left">${person.title}</p>

                <p class="right">Nationality:</p>
                <p class="left">${person.nationality}</p>
                <p class="right">Skills
                    <i class="fas fa-caret-down skills"></i>
                </p>
                <ul class="skills-list left">
                    <li>${person.skills}</li>
                    <li>1</li>
                </ul>

                <p class="right">Why Softwear Developer:</p>
                <p class="left">${person.whySofterDeveloper}</p>

                <p class="right">Long Terms Vision:</p>
                <p class="left">${person.longTermVision}</p>

                <p class="right">What Motivate Me:</p>
                <p class="left">${person.motivatesMe}</p>

                <p class="right">Favorite Quote:</p>
                <p class="left">${person.favoriteQuote}</p>

                <p class="right">Joined:</p>
                <p class="left">${person.joinedOn}</p>
            </div>
        </div>
    `;

    return html;
    
}

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
            <img class="person-img-carousel" src="images/${person.src}" alt="${person.alt}"/> 
        </div>
    `;

    return html;
}


let curPersonIdx = 0;
renderCarousel(photosInfo);
renderPerson(photosInfo[curPersonIdx]);
attachCollapseInfo();


// Show next person
function renderNextPerson() {
    curPersonIdx += 1;
    const person = photosInfo[curPersonIdx];

    if (curPersonIdx === photosInfo.length - 1) {
        curPersonIdx = -1;
    }

    renderPerson(person);
    attachCollapseInfo();
}

//Show prev person
function renderPrevPerson() {
    const person = photosInfo[curPersonIdx];

    if (curPersonIdx === 0) {
        curPersonIdx = photosInfo.length;
    }

    curPersonIdx -= 1;
    renderPerson(person);
    attachCollapseInfo();
}

//Hide / show infor onclick;
function attachCollapseInfo() {
    const toggleBtn = document.querySelector('.person .toggle-info');
    const infoEl = document.querySelector('.person .info-cont');

    toggleBtn.addEventListener('click', function() {
        infoEl.classList.toggle('hidden');
    });
}