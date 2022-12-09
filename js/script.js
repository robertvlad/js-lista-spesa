//Defineire la lista della spesa con un array
const list_items = [
    "Latte",
    "limoni",
    "Banane",
    "Gelato",
    "Arnce"
]

//Definire il container della lista
const list_container = document.querySelector(".shopping-list");

//Ciclo whilte per difinire la lista della spesa
let i = 0
let element = ""

while(i < list_items.length){

    let item_list = list_items[i];

    element += `<li>${item_list}</li>`
    list_container.innerHTML = element;

    //Incremento e condizione per terminare il ciclo while
    i++
}

//Termine ciclo while