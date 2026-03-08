const exploreBtn = document.querySelector("#btn-submit");
const fullName = document.getElementById("name");
const userEmail = document.getElementById("email");

exploreBtn.addEventListener("click", (e) => {
    const nameCollector = fullName.textContent;
    
    alert(`Welcome $(nameCollector.value) to the world of website design, and the beauty of it. Miebifaghe Emmanuel`);
})
