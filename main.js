var listItems = document.getElementById("theList").getElementsByTagName("li");

for(i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    alert("click detected")
}