var newItemCounter = 1;
var list =document.getElementById("theList");
var button = document.getElementById("addButton");
var headline = document.getElementById("headline");
var listItems = document.getElementById("theList").getElementsByTagName("li");

list.addEventListener("click", activateItem);

function activateItem(e) {
    if(e.target.nodeName == "LI"){
        headline.innerHTML = e.target.innerHTML;
        for(i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active")
        }
        e.target.classList.add("active");
    }

    }
 

addButton.addEventListener("click", createNewItem);

function createNewItem() {
    theList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
    newItemCounter++
}