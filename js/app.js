// const header = document.querySelector("#headerText")
// header.style.color = "red";



/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');
const goUp = document.getElementById("btn");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function checkViewport (sec) {
    const bounding = sec.getBoundingClientRect();
    return (
        bounding.top >= -150 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navContainer() {
    for (let i=0; i < sections.length; i++){
        const listItems = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav');
        const sectionId = sections[i].getAttribute('id');
        // I don’t know how to add the hashtag sign so I add it to a variable 😂😂😂
        const hash = "#";
        listItems.innerHTML = `<a href="${hash}${sectionId} "class="menu__link " >${sectionName}</a>`;
        fragment.appendChild(listItems);
    }
    const navBar = document.getElementById('navbar__list')
    navBar.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport

function ActiveClass(){
    // this const for highlight anchor 
    const activeLink = document.querySelectorAll(".menu__link")
    for (let i=0; i < sections.length; i++){
        if (checkViewport(sections[i])){
            sections[i].classList.add("your-active-class");
            activeLink[i].classList.add("active");
        }else{
            sections[i].classList.remove("your-active-class");
            activeLink[i].classList.remove("active");
        }
    }
};

// Scroll to anchor ID using scrollTO event

function ScrollToSetion(evt) {
    const target = document.querySelector(evt.target.hash)
    const top = target.getBoundingClientRect().top + window.pageYOffset;
    evt.preventDefault();
    window.scrollTo({
        top,
        behavior: "smooth"
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('scroll', function(){
    ActiveClass();
});

// Scroll up on img click

goUp.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
};

// Build menu 

navContainer();

// Scroll to section on link click

navbarList.addEventListener('click', ScrollToSetion);

// Set sections as active
























