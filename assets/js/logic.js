// Dark & Light Mode

const modeToggleBtn = document.getElementById("mode-toggle");

modeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeToggleBtn.textContent = "☀️";
    } else {
        modeToggleBtn.textContent = "🌙";
    }
});
