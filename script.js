const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItem'); 
const itemList = document.getElementById('itemList');

function addItem() {
    const newItem = itemInput.value.trim();

    if (newItem !== '') {
        const li = document.createElement('li');
        li.textContent = newItem;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            updateLocalStorage();
        });

        const remover = document.createElement('button');
        remover.textContent = 'Remover';
        remover.classList.add('button-remover');
        remover.addEventListener('click', () => {
            li.remove();
            updateLocalStorage();
        });

        li.appendChild(remover);
        itemList.appendChild(li);
        itemInput.value = '';

        updateLocalStorage();
    }
}


addItemBtn.addEventListener('click', addItem);

function updateLocalStorage() {
    const items = itemList.innerHTML;
    localStorage.setItem('shoppingList', items);
}

function loadLocalStorage() {
    const items = localStorage.getItem('shoppingList');
    if (items) {
        itemList.innerHTML = items;
    }
}

localStorage.clear();

