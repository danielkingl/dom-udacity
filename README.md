# Javascript and the DOM

This project is a demostration of DOM manipulation using JS.

The project is a basic landing page with 4 sections plus subscribtion form.

### creating the navigation menu and connecting to the different sections.

The first thing that I did was to create 'li' elements inside 'ul'
to go inside the navigation menu. those 'li' elements are connected to the correct section,
so when the user click on one of the item in the navigation,
the page will scroll down to the correct section.
to create that, i used different methods, for example, 'getAttribute' to get the
correct 'id' in the section and using a for loop to go over the different sections.
so if you create other sections in the HTML file, it will automaticlly create new item links and refer to the specific section.

### subscription form

simple html code that create a form to capture the user's name and email address.
in JS file, there is an EventListener that sends a message for the user after submitting their details.

### active class

activate the sections when they are displayed in viewport and highlights the corresponding items.
I used getBoundingClientRect() to get the dimensions of the sections and activate them.

## Authors

- [@danielkingl](https://www.github.com/danielkingl)
