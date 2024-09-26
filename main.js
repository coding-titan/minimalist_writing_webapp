// Variables

const collapseButton = document.getElementById("collapse-button");
const navBar = document.querySelector("nav")

const collapse = function() {
    document.body.style.backgroundColor = "green";
    navBar.style.backgroundColor = "red";
    
}

document.addEventListener("click", collapse)

