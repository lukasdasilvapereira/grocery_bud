let inputEl = document.querySelector(".input-el");
let heroEl = document.querySelector(".hero-el");
let clearItems = document.querySelector(".clear")

function submit() {
    if (inputEl.value === "") {
        window.alert("You need to write something")
    } else {
        heroEl.innerHTML += `<div class="hero">
                    <p class="text">${inputEl.value}</p>
                    <div>
                        <input type="checkbox" name="checkbox" id='checkbox'>
                        <i class="fa-solid fa-trash trash"onclick="deleteItem(this)"></i>
                    </div>
                </div>`
        inputEl.value = ""
    }
}

function deleteItem(el) {
    el.parentElement.parentElement.remove()
}

inputEl.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        submit()
    }
})


clearItems.addEventListener("click", function () {
    heroEl.textContent = ""
})