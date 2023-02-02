
/* first we start by declaring the global variables */



const navBar = document.getElementById("navbar__list");
const sections =  document.querySelectorAll("section");


/* then we creat a function with ' for of loop ' to add a new list item to the bar each time a new section is added.
 we also create a link inside the new list item for when we click on it, it should take us to the
 specific section using the scroll into view method which we'll create later, also inside 
that link we add our class and data-.. for each new element.
 we used the class"menu__link" from the given css stylesheet.
 we finally append the new list item to the parent element navBar*/

function newListItem (){
for ( const section of sections) {
  let listItem = document.createElement("li");
    listItem.innerHTML = `<a class="menu__link" data-anch="${section.id}"> ${section.id} </a>`;
    navBar.appendChild(listItem);
}}
 
newListItem(); 
    /* then we add an event to the document with a function that was given in the "project's Development strategy" using the
 ".getBoundingClientRect()" method to highlight the section shown in the viewportas.
 
   notice that the class "your-active-class" is already given in the css stylesheet, it just needs to be recalled on 
    the right element */


    document.addEventListener("scroll",  function makeActive(){
        for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 0) {
        section.classList.add("your-active-class");
        } else {
        section.classList.remove("your-active-class");
        }
        }
        });
 
        /* finally we use the scroll into view method in a for ... of loop to scroll into the wanted section with a smooth behavior, 
        but first we need to make some new variables */

        const anchors = document.querySelectorAll(".menu__link");
        
     for ( const anch of anchors){
      const section = document.getElementById(anch.getAttribute("data-anch"));
      
      anch.addEventListener("click", function(){ section.scrollIntoView({behavior:"smooth", block:"center"})});
     }
        