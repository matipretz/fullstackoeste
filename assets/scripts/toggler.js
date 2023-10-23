document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        toggleTheme()
    }
});

function toggleTheme() {
    const head = document.querySelector("head");
    const toggler = document.createElement("link");
    toggler.href = "assets/styles/light.css";
    toggler.rel = "stylesheet";
    toggler.id = "lightMode";

    if (!!document.getElementById("lightMode")) {
        head.removeChild(document.getElementById("lightMode"));
        localStorage.setItem("theme", "dark");
    } else {
        head.append(toggler);
        localStorage.setItem("theme", "light");
    }
}