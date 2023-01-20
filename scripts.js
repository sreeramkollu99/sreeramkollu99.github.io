var menuItems = document.querySelectorAll(".menu-item");

// get the id of sections 
var divIds = ["home", "about", "services","portfolio","blog","contact"]; 

// Listen for the scroll event
document.addEventListener("scroll", function() {
  // Get the current scroll position
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  // Loop through the sections
  for (var i = 0; i < divIds.length; i++) {
    // Get the div element by id
    var div = document.getElementById(divIds[i]);
    // Check if the current scroll position is within the top and bottom of the div
    if (scrollPos >= div.offsetTop && scrollPos < (div.offsetTop + div.offsetHeight)) {
      // Remove the active class from all menu items
      for (var j = 0; j < menuItems.length; j++) {
        menuItems[j].classList.remove("active");
      }
      // Add the active class to the corresponding menu item
      menuItems[i].classList.add("active");
    }
  }
});