let inputEl = document.querySelector(".input-el").value;
let heroEl = document.querySelector(".hero-el")

function submit() {
    heroEl.innerHTML = `<div class="hero">
                    <p class="text">Bacon</p>
                    <div>
                        <input type="checkbox" name="checkbox" id='checkbox' checked>
                        <i class="fa-solid fa-trash trash"onclick="deleteItem()"></i>
                    </div>
                </div>`
}