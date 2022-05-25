// ------------------------------------------Button--------------------------------------------
const toTopButton = document.querySelector("#top-button");
toTopButton.addEventListener("click", toTop);

function toTop() {
    window.scrollTo(0, 0);
}
// --------------------------------------------End---------------------------------------------
// ----------------------------------------FingerCiser-----------------------------------------
const calorieCounter = document.querySelector(".treadmill");
calorieCounter.addEventListener("scroll", scrollTop);
let count = 0;
function scrollTop() {
    count++;
    document.getElementById("progress").innerText = count;
};
// --------------------------------------------End---------------------------------------------
// -------------------------------------Christmas Lights---------------------------------------
// document.getElementById('lightChanger').addEventListener('click', function () {
//     if (this.classList.contains('off')) {
//         this.classList.remove('off');
//     } else {
//         this.classList.add('off');
//     }
// });