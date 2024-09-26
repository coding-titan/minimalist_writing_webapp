// Variables

const collapseButton = document.getElementById("collapse-button");
const navBar = document.querySelector("nav");
let isCollapsed = false;
const collapseIcon = document.getElementById("collapse-icon");
const expandIcon = document.getElementById("expand-icon")

const toggleCollapse = function() {
    // if statement to check if it is currently collapsed
    if (isCollapsed === false) {
        // reduce width of navbar so that only arrow fits
        navBar.style.width = "3rem";
    
        // Change to expand icon
        collapseIcon.style.display = "none";
        expandIcon.style.display = "block";

        // Set collapse
        isCollapsed = true;

    } else {
        // Change back width
        navBar.style.width = "auto";

        // Change back icon
        collapseIcon.style.display = "block";
        expandIcon.style.display = "none";

        // Set collaps
        isCollapsed = false;
    }
}

document.addEventListener("click", toggleCollapse)

