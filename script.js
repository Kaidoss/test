// script.js

const catBox = document.getElementById("cat-box");
const radiationSource = document.getElementById("radiation-source");
const openBtn = document.getElementById("open-box-btn");

let isOpen = false;

function toggleBox() {
    if (isOpen) {
        catBox.classList.add("hidden");
        radiationSource.classList.remove("hidden");
        isOpen = false;
    } else {
        catBox.classList.remove("hidden");
        radiationSource.classList.add("hidden");
        isOpen = true;
    }
}

openBtn.addEventListener("click", toggleBox);
