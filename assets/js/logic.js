
function switchDark(){
const formInput = document.getElementById("form");
formInput.classList.remove("light-mode");
formInput.classList.add("dark-mode");
}
const darkButton = document.getElementById("dark");

darkButton.addEventListener("click", switchDark)