const itemInput = document.querySelector(".itemInput");
const addItemButton = document.querySelector(".addButton");

const list = document.querySelector(".shoppingList");

function addListItem() {
    const newItem = itemInput.value;
    itemInput.value = '';
    
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);

    newSpan.textContent = newItem;
    newButton.textContent = "Delete";

    list.appendChild(newLi);

    newButton.addEventListener("click", () => {
        newLi.remove();
    });

    itemInput.focus();
}

addItemButton.addEventListener("click", () => {
    addListItem();
})

itemInput.addEventListener("keydown", function(e) {
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        addListItem();
    }
})