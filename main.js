// Variables

// Buttons
const collapseButton = document.getElementById("collapse-button");
const copyButton = document.getElementById("copy-button");

// Navbar
const navBar = document.querySelector("nav");
let isCollapsed = false;
const collapseIcon = document.getElementById("collapse-icon");
const expandIcon = document.getElementById("expand-icon");
let navBarWidth = "12.3rem";

// Text
let writtenText = document.getElementById("writing-box");

function autoGrow(element) {
    element.style.height = (element.scrollHeight) + "px";
}

const toggleCollapse = function() {
    // if statement to check if it is currently collapsed
    if (isCollapsed === false) {
        // reduce width of navbar so that only arrow fits & reduce opacity
        navBar.style.width = "2rem";
        navBar.style.opacity = "0.5";

        // Change to expand icon
        collapseIcon.style.display = "none";
        expandIcon.style.display = "block";

        // Set collapse
        isCollapsed = true;

    } else {
        // Change back width & opacity
        navBar.style.width = navBarWidth;
        navBar.style.opacity = "1";

        // Change back icon
        collapseIcon.style.display = "block";
        expandIcon.style.display = "none";

        // Set collapse
        isCollapsed = false;
    }
}

const justCollapse = function() {
    isCollapsed = false;
    toggleCollapse();
}

const copyText = function() {
    // Select text field
    writtenText.select();
    writtenText.setSelectionRange(0, 99999);

    // Copy that text
    navigator.clipboard.writeText(writtenText.value);

    // Alert to confirm
    alert("Text copied.");
}

collapseButton.addEventListener("click", toggleCollapse)