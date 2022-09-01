// bringing in all the panels by manipulating the DOM
const panels = document.querySelectorAll(".panel");

// add an event listener for a click
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

// This function is to remove the 'active' class first on all panels before the event listener
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
