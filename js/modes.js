// Select dark-mode button
var btnDark = document.getElementById("dark");

// Select light-mode button
var btnLight = document.getElementById("light");

// Select the stylesheet <link>
var theme = document.querySelector("#theme-link");
console.log(theme);

// Listen for a click on the button
btnDark.addEventListener("click", function() {
    console.log('got it dark');

    if (theme.getAttribute("href") == "css/light-mode.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/dark-mode.css";
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "css/light-mode.css";
    }
});

// Listen for a click on the button
btnLight.addEventListener("click", function() {

    console.log('got it light');
    if (theme.getAttribute("href") == "css/light-mode.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/dark-mode.css";
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "css/light-mode.css";
    }
});