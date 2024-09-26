// Variables

const collapseButton = document.getElementById("collapse-button");
const navBar = document.querySelector("nav");
let isCollapsed = false;
const collapseIcon = document.getElementById("collapse-icon");
const expandIcon = document.getElementById("expand-icon")

const toggleCollapse = function() {
    // if statement to check if it is currently collapsed
    if (isCollapsed === false) {
        // reduce width of navbar so that only arrow fits & reduce opacity
        navBar.style.width = "3rem";
        navBar.style.opacity = "0.5";

        // Change to expand icon
        collapseIcon.style.display = "none";
        expandIcon.style.display = "block";

        // Set collapse
        isCollapsed = true;

    } else {
        // Change back width & opacity
        navBar.style.width = "11rem";
        navBar.style.opacity = "1";

        // Change back icon
        collapseIcon.style.display = "block";
        expandIcon.style.display = "none";

        // Set collapse
        isCollapsed = false;
    }
}

collapseButton.addEventListener("click", toggleCollapse)

