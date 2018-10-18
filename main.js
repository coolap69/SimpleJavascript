var newItemCounter = 1;
var list =document.getElementById("theList");
var button = document.getElementById("addButton");
var headline = document.getElementById("headline");
var listItems = document.getElementById("theList").getElementsByTagName("li");

for(i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    headline.innerHTML = this.innerHTML;
}

addButton.addEventListener("click", createNewItem);

function createNewItem() {
    theList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++
}