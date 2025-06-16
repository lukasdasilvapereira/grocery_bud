let inputEl = document.querySelector(".input-el");
let heroEl = document.querySelector(".hero-el");
let clearItems = document.querySelector(".clear")
let count = 0;

function submit() {
    heroEl.innerHTML += `<div class="hero hero${count + 1}">
                    <p class="text">${inputEl.value}</p>
                    <div>
                        <input type="checkbox" name="checkbox" id='checkbox' checked>
                        <i class="fa-solid fa-trash trash"onclick="deleteItem()"></i>
                    </div>
                </div>`
                inputEl.value = ""
                count++
}

function deleteItem() {
    let trash = document.querySelector(".fa-trash")
    heroEl(`hero${count}`).innerHTML = ""
}


clearItems.addEventListener("click", function() {
    heroEl.textContent = ""
    count = 0;
})