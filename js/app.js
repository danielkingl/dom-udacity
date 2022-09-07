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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// going over a loop to create "li" elements and insert them into "ul" element. so when the user click on the item, he should refer to the right section in the page.

const landing = document.querySelectorAll("section");
const navList = document.querySelector("ul");
for (i = 0; i < landing.length; i++) {
    const item = document.createElement("li");
    const text = landing[i].getAttribute("data-nav");
    const link = landing[i].getAttribute("id");
    item.innerHTML = `<a href="#${link}">${text}</a>`;
    navList.appendChild(item);
    let newLink = item.querySelector("a");
    newLink.addEventListener('click', event => {
        event.preventDefault();
        let target = document.querySelector(`#${link}`);
        target.scrollIntoView({behavior: "smooth"});
    } );
}
// form element to capture user's details and sending a message.

const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("thanks for submitting your details");
});

let removeActive = () => {
    let activea = document.querySelector("a.active");
    if(activea !=null){
        activea.classList.remove("active");
    }
} 


function makeActive(){
    for (const section of landing) {
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
         removeActive();
        //apply active state on current section and corresponding Nav link
         let id = section.getAttribute("id");
         const activeClass = document.querySelector(`a[href="#${id}"]`)
         activeClass.classList.add("active");
        
        }
        
     }
  }

  document.addEventListener("scroll", function() { makeActive();});

  const hambuger = document.querySelector("#menu");
  hambuger.addEventListener("click", e => {
    const select = document.querySelector("#navbar__list");
    select.classList.toggle("show");
    const allAnchors = document.querySelectorAll("nav a");
    allAnchors.forEach(anchor =>{
        anchor.addEventListener("click", ()=>{
            select.classList.toggle("show");
        }
        )
    }
        ) 
    
  }

  )






