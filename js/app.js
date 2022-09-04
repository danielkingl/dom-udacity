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
    item.innerHTML = `<a href=#${link}>${text}</a>`;
    navList.appendChild(item);
}
// sending a message to the user after submitting the form and saving the data.

const form = document.querySelector("#subscription");
form.addEventListener ("submit", (event) => {
    event.preventDefault();
    alert("Thank you for joining us");
    const formData = new FormData(event.target);
    const nameForm = formData.get("name");
    const emailForm = formData.get("email");
});
